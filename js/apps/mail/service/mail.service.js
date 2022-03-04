import { utilService } from '../../../service/util-service.js';
import { storageService } from '../../../service/async-storage-service.js';

const STORAGE_KEY = 'mailsDB';
_createMails();

export const mailService = {
    query,
    remove,
    save,
    get,
    addNewMail,
    // getEmptyMail,
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

function addNewMail(mail) {
    const newMail = {
        subject: mail.subject,
        body: mail.body,
        to: mail.to,
        isRead: true,
        isStarred: false,
        sentAt: new Date(),
        from: 'Mahatma@appsus.com',
        isSent: true
    }
    return save(newMail)
}

function _createMails() {
    let mails = utilService.loadFromStorage(STORAGE_KEY);
    if (!mails || !mails.length) {
        mails = [
            {
                id: utilService.makeId(),
                subject: 'First mail!',
                body: 'Good luck with the sprint',
                isRead: false,
                isStarred: true,
                sentAt: new Date(2022, 2, 3, 10, 30),
                to: 'Mahatma@appsus.com',
                from: 'eyal@gmail.com',
                isSent: false,
            },
            {
                id: utilService.makeId(),
                subject: 'Second mail',
                body: 'Have fun in the sun!',
                isRead: false,
                isStarred: false,
                sentAt: new Date(2022, 2, 3, 9, 4),
                to: 'Mahatma@appsus.com',
                from: 'yosef@gmail.com',
                isSent: false,
            },
            {
                id: utilService.makeId(),
                subject: 'Third mail',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                isRead: true,
                isStarred: false,
                sentAt: new Date(2022, 0, 4, 7, 44),
                to: 'Mahatma@appsus.com',
                from: 'lihi@gmail.com',
                isSent: false
            },
            {
                id: utilService.makeId(),
                subject: 'Very important!',
                body: 'Please dont forget to...',
                isRead: false,
                isStarred: true,
                sentAt: new Date(2022, 2, 1, 8, 10),
                to: 'Mahatma@appsus.com',
                from: 'dvir@gmail.com',
                isSent: false
            },
            {
                id: utilService.makeId(),
                subject: 'Shalom Shalom',
                body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloribus cum incidunt? Tempora dolor incidunt assumenda ea ipsam vitae eveniet iure vel. Dolores magnam voluptatum id perferendis maxime, expedita earum.',
                isRead: false,
                isStarred: false,
                sentAt: new Date(2022, 1, 25, 5, 55),
                to: 'Mahatma@appsus.com',
                from: 'yosef@gmail.com',
                isSent: false
            },
            {
                id: utilService.makeId(),
                subject: 'How are you?',
                body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                isRead: true,
                isStarred: false,
                sentAt: new Date(2022, 2, 3, 8, 50),
                to: 'Mahatma@appsus.com',
                from: 'lihi@gmail.com',
                isSent: false
            },
            {
                id: utilService.makeId(),
                subject: 'Code review',
                body: 'Dont forget to ask CR when you finish.',
                isRead: false,
                isStarred: false,
                sentAt: new Date(2021, 7, 22, 1, 32),
                to: 'Mahatma@appsus.com',
                from: 'eyal@gmail.com',
                isSent: false
            },
            {
                id: utilService.makeId(),
                subject: 'Thank you very much',
                body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloribus cum incidunt?',
                isRead: false,
                isStarred: false,
                sentAt: new Date(1980, 9, 1, 7, 30),
                to: 'Mahatma@appsus.com',
                from: 'barak@gmail.com',
                isSent: false
            },
            {
                id: utilService.makeId(),
                subject: 'I LOVE YOU!',
                body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloribus cum incidunt? Tempora dolor incidunt assumenda ea ipsam vitae eveniet iure vel. Dolores magnam voluptatum id perferendis maxime, expedita earum.',
                isRead: true,
                isStarred: true,
                sentAt: new Date(2021, 11, 11, 11, 11),
                to: 'Mahatma@appsus.com',
                from: 'dafi@gmail.com',
                isSent: false
            },
            {
                id: utilService.makeId(),
                subject: 'I LOVE YOU!',
                body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloribus cum incidunt? Tempora dolor incidunt assumenda ea ipsam vitae eveniet iure vel. Dolores magnam voluptatum id perferendis maxime, expedita earum.',
                isRead: true,
                isStarred: false,
                sentAt: new Date(2021, 11, 11, 11, 11),
                to: 'dafi@gmail.com',
                from: 'Mahatma@appsus.com',
                isSent: true
            },
            {
                id: utilService.makeId(),
                subject: 'Thank you very much',
                body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloribus cum incidunt? Tempora dolor incidunt assumenda ea ipsam vitae eveniet iure vel. Dolores magnam voluptatum id perferendis maxime, expedita earum.',
                isRead: true,
                isStarred: false,
                sentAt: new Date(2021, 11, 11, 11, 11),
                to: 'barak@gmail.com',
                from: 'Mahatma@appsus.com',
                isSent: true
            }, {
                id: utilService.makeId(),
                subject: 'How are you?',
                body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloribus cum incidunt? Tempora dolor incidunt assumenda ea ipsam vitae eveniet iure vel. Dolores magnam voluptatum id perferendis maxime, expedita earum.',
                isRead: true,
                isStarred: false,
                sentAt: new Date(2021, 11, 11, 11, 11),
                to: 'yosef@gmail.com',
                from: 'Mahatma@appsus.com',
                isSent: true
            }, {
                id: utilService.makeId(),
                subject: 'Shalom',
                body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam doloribus cum incidunt? Tempora dolor incidunt assumenda ea ipsam vitae eveniet iure vel. Dolores magnam voluptatum id perferendis maxime, expedita earum.',
                isRead: false,
                isStarred: false,
                sentAt: new Date(2021, 11, 11, 11, 11),
                to: 'eyal@gmail.com',
                from: 'Mahatma@appsus.com',
                isSent: true
            },
        ];
        utilService.saveToStorage(STORAGE_KEY, mails);
    }
    return mails;
}

function _createMail(subject, body) {
    const mail = getEmptymail(subject, body)
    return mail;
}

// Factory Method:
// function getEmptyMail(subject, body,) {
//     return {
//         subject,
//         body,
//         to: '',
//         id: utilService.makeId(),
//         isRead: true,
//         isStarred: false,
//         sentAt: new Date(),
//         from: 'user@appsus.com',
//         isSent: true
//     };
// }