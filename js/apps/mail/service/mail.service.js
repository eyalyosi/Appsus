import { utilService } from '../../../service/util-service.js';
import { storageService } from '../../../service/async-storage-service.js';

const STORAGE_KEY = 'mailsDB';
_createMails();

export const mailService = {
    query,
    remove,
    save,
    get,
    getEmptyMail,
};

function query() {
    return storageService.query(STORAGE_KEY);
}

function remove(mailId) {
    return storageService.remove(STORAGE_KEY, mailId);
}

function get(mailId) {
    return storageService.get(STORAGE_KEY, mailId)
        .then(mail => {
            return _setNextPrevMailId(mail)
        })
}

function save(mail) {
    if (mail.id) return storageService.put(STORAGE_KEY, mail);
    else return storageService.post(STORAGE_KEY, mail);
}

function _setNextPrevmailId(mail) {
    return storageService.query(STORAGE_KEY).then(mails => {
        const mailIdx = mails.findIndex(currmail => currmail.id === mail.id)
        mail.nextmailId = (mails[mailIdx + 1]) ? mails[mailIdx + 1].id : mails[0].id
        mail.prevmailId = (mails[mailIdx - 1]) ? mails[mailIdx - 1].id : mails[mails.length - 1].id
        return mail
    })
}

// Factory Method:
function getEmptyMail(subject, body ) {
    return {
        id: utilService.makeId(),
        subject,
        body,
        isRead: false,
        sentAt: new Date(),
        to: 'momo@momo.com'
    };
}

function _createMails() {
    let mails = utilService.loadFromStorage(STORAGE_KEY);
    if (!mails || !mails.length) {
        mails = [
            {
                id: utilService.makeId(),
                subject: 'First mail!',
                body: 'Good luck!',
                isRead: false,
                sentAt: new Date(),
                to: 'momo@momo.com'
            },
            {
                id: utilService.makeId(),
                subject: 'Second mail!',
                body: 'Have fun!',
                isRead: false,
                sentAt: new Date(),
                to: 'momo@momo.com'
            },
            {
                id: utilService.makeId(),
                subject: 'Third mail!',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                isRead: true,
                sentAt: new Date(),
                to: 'momo@momo.com'
            },

        ];
        utilService.saveToStorage(STORAGE_KEY, mails);
    }
    return mails;
}

function _createMail(subject, body ) {
    const mail = getEmptymail(subject, body )
    // mail.id = utilService.makeId()
    return mail;
}



