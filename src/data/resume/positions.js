const positions = [
  {
    company: 'Publicis Sapient',
    position: 'Senior Associate Data Scientist L1',
    link: 'https://www.publicissapient.com/',
    daterange: 'April 2021 - Present',
    points: [
      ' Developed a robust topic based text summarization pipeline to generate Short(3-6 lines)/Long(12-15) summaries for banking documents using semantic density based topic filtering and BART. Also implemented a novel, unsupervised evaluation metric for the text summarization task using masked language modelling to eliminate the need for reference (human) summaries for evaluation having Rouge2 score 25.4. Custom FastText model was trained to get the embeddings of specefic banking words in the vocablary,',
      'Constructed a Confluence NLP Bot that automatcally indexes and help search the AI division confluence pages, using cognitive search.',
    ],
  },
  {
    company: 'Publicis Sapient',
    position: 'Associate Data Scientist L2',
    link: 'https://www.publicissapient.com/',
    daterange: 'Dec 2019 - March 2021',
    points: [
      'NLP researcher working on the KaaS (Knowledge as a Service) platform by Publicis Sapient. KaaS was recognised as a runner up in the best innovation in NLP category at the AIconics Awards (San Francisco) 2019.',
'Handled several NLP use cases like cognitive search, open domain QA, automated document tagging, NER, text summarisation etc along with scalable, production ready, FastAPI based dockerised micro-services for the KaaS NLP platform',
'Owned the end-to-end research development of Quention-Answering model trained on Squad2.0 Dataset for Cognitive Search Platform, resulted in 12% search result accuracy by using RoBERTA based model and farm framework for faster inference.',
' Designed and developed the Document Insight Platform to get diffrent NLP insight out of any text document and Video. ',
      'Developed an automated merchandiser multipack bundle recommendation system to Elevate Customer Experiences, multipack comprises of 40% sales within 6 months. K-Means Clustering along with Feature Engineering and Custom Apriori algorithm to get multipacks from products. Created HTML reports for bundle recommendation.',
      ' We have established a highly effective and disciplined ML development framework to create items/product bundles based on customer segmentation. This helped them to target the right customer and recommend most likely item/ product bundle.'
    ],
  },
  {
    company: 'Publicis Sapient',
    position: 'Associate Software Development Engineer 2',
    link: 'https://www.publicissapient.com/',
    daterange: 'July 2019 - Nov 2019',
    points: [
      'Developed front-end for financial assistance to gather all banks data to present a unified interface using ReactJS and redux.',
      'Worked as trainee full-stack developer for developing distributed event notification system, having tech stack Spring Boot, Apache Kafka and Kafka Streams, ELK Stack, MongoDB, Docker and AWS for microservices, ReactJS for UI and Jenkins and Git for the build for 3 months.',
    ],
  },
  {
    company: 'PwC DIAC US Advisory',
    position: 'Data Scientist Intern',
    link: 'https://www.pwc.com',
    daterange: 'January 2019 - June 2019',
    points: [
      'Developed a Automated External Sensing Tool to analyze the M&A deals and sense the upcoming changes and ongoing trends in market at a granular level using NER technique and Dependency Parsing for Healthcare sector',
      'Instrumental in developing a NLP based chatbot which can converse with any database by creating text based messages to SQL Query.',
    ],
  },
];

export default positions;
