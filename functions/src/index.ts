import * as functions from 'firebase-functions';
// @ts-ignore
import * as admin from 'firebase-admin';
const https = require('https');

admin.initializeApp();

// exports.invoiceNumber = functions.firestore
//   .document('orders/{orderId}')
//   .onCreate((snap: any, context: any) => {
//     const docRef = admin.firestore().collection('orders').doc(context.params.orderId);
//     admin.firestore().collection('orders').orderBy('createdAt', 'desc').limit(2)
//       .get()
//       .then((snapshot: any) => {
//         snapshot.forEach((item: any) => {
//           if (item.data().invoiceNumber) {
//             const latestInvoiceNumber = item.data().invoiceNumber + 1;
//             docRef.update({
//               invoiceNumber: latestInvoiceNumber
//             })
//               .then(() => {
//                 console.log(latestInvoiceNumber);
//               });
//           }
//         });
//       });
//   });

exports.getRate = functions.https.onCall( (data, context) => {
  const url = data.url;
  return new Promise((resolve, reject) => {
     https.get(url, (res: any) => {
        res.setEncoding('utf8').on('data', (d: any) => {
          resolve(d);
        });
    });
  });
});
