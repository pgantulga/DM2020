import * as functions from 'firebase-functions';
// @ts-ignore
import * as admin from 'firebase-admin';

admin.initializeApp();

exports.invoiceNumber = functions.firestore
  .document('orders/{orderId}')
  .onCreate((snap: any, context: any) => {
    const docRef = admin.firestore().collection('orders').doc(context.params.orderId);
    admin.firestore().collection('orders').orderBy('createdAt', 'desc').limit(2)
      .get()
      .then((snapshot: any) => {
        snapshot.forEach((item: any) => {
          if (item.data().invoiceNumber) {
            const latestInvoiceNumber = item.data().invoiceNumber + 1;
            docRef.update({
              invoiceNumber: latestInvoiceNumber
            })
              .then(() => {
                console.log(latestInvoiceNumber);
              });
          }
        });
      });
  })

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
