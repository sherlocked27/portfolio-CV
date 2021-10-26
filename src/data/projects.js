// TODO Add a couple lines about each project
const data = [
  {
    title: 'Invoice Extraction',
    subtitle: 'Extract key-values and line items from Invoices',
    image: 'https://academy.getjobber.com/wp-content/uploads/2017/01/WhatIsAnInvoice-1.png',
    date: '2021-09-25',
    desc:
      'Layout based Deep neural network to extract intelligent information from invoice documents for the predefined labels. It is done by finetuning LayoumLMv2 model. Postprocessing is done using the K-Means Clustering to eliminate outliers. Final F1 Score of 0.81 with 22 labels. The implementation is done in Tensorflow2.0, Keras and detectron2',
    link: 'https://invoice-parser.tech'
  },
  {
    title: 'Transformer Implementation',
    subtitle: 'Attention is all you need paper implementation',
    image: 'https://raw.githubusercontent.com/sherlocked27/transformer_tf2.0/master/images/attention.png',
    date: '2021-07-25',
    desc:
      'Implementaion of paper (Attention is all you need). Implementation is done with TensorFlow2.0, keeping in mind the OOPS principles.',
    link: 'https://transformers.rishibajargan.live'
  },
];

export default data;
