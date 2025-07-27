// backebd/src/data/careerData.js

const careerData = [
  {
    level: 1,
    paths: [
      {
        id: 1,
        title: 'Path One',
        image: 'https://via.placeholder.com/300x200.png?text=Career+Start+1',
        description: 'Description for Path One.',
        buttonText: 'Complete',
        moreInfo: {
          description: 'Detailed description for Path One.',
          links: [
            { url: 'https://example.com', label: 'Example Link' },
          ],
          additionalImage: "https://via.placeholder.com/500x300.png?text=Detailed+Image+1", // Path to the additional image
        },
      },
      {
        id: 2,
        image: 'https://via.placeholder.com/300x200.png?text=Career+Start+2',
        title: 'Career Start 2',
        description: 'Enhance your driving techniques and strategies.',
        buttonText: 'Complete',
        level: 1,
        moreInfo: {
          description: 'Detailed description for Path One.',
          links: [
            { url: 'https://example.com', label: 'Example Link' },
          ],
          additionalImage: "https://via.placeholder.com/500x300.png?text=Detailed+Image+1", // Path to the additional image
        },
      },
      {
        id: 3,
        image: 'https://via.placeholder.com/300x200.png?text=Career+Start+3',
        title: 'Career Start 3',
        description: 'Compete in regional tournaments to gain experience.',
        buttonText: 'Complete',
        level: 1,
        moreInfo: {
          description: 'Detailed description for Path One.',
          links: [
            { url: 'https://example.com', label: 'Example Link' },
          ],
          additionalImage: "https://via.placeholder.com/500x300.png?text=Detailed+Image+1", // Path to the additional image
        },
      },
      {
        id: 4,
        image: 'https://via.placeholder.com/300x200.png?text=Career+Start+4',
        title: 'Career Start 4',
        description: 'Master basic vehicle mechanics and maintenance.',
        buttonText: 'Complete',
        level: 1,
        moreInfo: {
          description: 'Detailed description for Path One.',
          links: [
            { url: 'https://example.com', label: 'Example Link' },
          ],
          additionalImage: "https://via.placeholder.com/500x300.png?text=Detailed+Image+1", // Path to the additional image
        },
      },
      {
        id: 5,
        image: 'https://via.placeholder.com/300x200.png?text=Career+Start+5',
        title: 'Career Start 5',
        description: 'Participate in time trials to improve lap times.',
        buttonText: 'Complete',
        level: 1,
        moreInfo: {
          description: 'Detailed description for Path One.',
          links: [
            { url: 'https://example.com', label: 'Example Link' },
          ],
          additionalImage: "https://via.placeholder.com/500x300.png?text=Detailed+Image+1", // Path to the additional image
        },
      },
      {
        id: 6,
        image: 'https://via.placeholder.com/300x200.png?text=Career+Start+6',
        title: 'Career Start 6',
        description: 'Learn advanced racing techniques from experts.',
        buttonText: 'Complete',
        level: 1,
        moreInfo: {
          description: 'Detailed description for Path One.',
          links: [
            { url: 'https://example.com', label: 'Example Link' },
          ],
          additionalImage: "https://via.placeholder.com/500x300.png?text=Detailed+Image+1", // Path to the additional image
        },
      },
      {
        id: 7,
        image: 'https://via.placeholder.com/300x200.png?text=Career+Start+7',
        title: 'Career Start 7',
        description: 'Engage in endurance races to build stamina.',
        buttonText: 'Complete',
        level: 1,
        moreInfo: {
          description: 'Detailed description for Path One.',
          links: [
            { url: 'https://example.com', label: 'Example Link' },
          ],
          additionalImage: "https://via.placeholder.com/500x300.png?text=Detailed+Image+1", // Path to the additional image
        },
      },
      {
        id: 8,
        image: 'https://via.placeholder.com/300x200.png?text=Career+Start+8',
        title: 'Career Start 8',
        description: 'Analyze race data to refine performance.',
        buttonText: 'Complete',
        level: 1,
        moreInfo: {
          description: 'Detailed description for Path One.',
          links: [
            { url: 'https://example.com', label: 'Example Link' },
          ],
          additionalImage: "https://via.placeholder.com/500x300.png?text=Detailed+Image+1", // Path to the additional image
        },
      },
    ],
  },
  {
    level: 2,
    paths: [
      {
        id: 9,
        image: 'https://via.placeholder.com/300x200.png?text=Advanced+1',
        title: 'Advanced Path 1',
        description: 'Analyze race data to refine performance.',
        buttonText: 'Complete',
        prerequisitePathIds: [1], // IDs of Level 1 paths that need to be completed
        level: 2,
        moreInfo: {
          description: 'Detailed description for Path One.',
          links: [
            { url: 'https://example.com', label: 'Example Link' },
          ],
          additionalImage: "https://via.placeholder.com/500x300.png?text=Detailed+Image+1", // Path to the additional image
        },
      },
      {
        id: 10,
        image: 'https://via.placeholder.com/300x200.png?text=Advanced+1',
        title: 'Advanced Path 1',
        description: 'Analyze race data to refine performance.',
        buttonText: 'Complete',
        prerequisitePathIds: [9], // IDs of Level 1 paths that need to be completed
        level: 2,
        moreInfo: {
          description: 'Detailed description for Path One.',
          links: [
            { url: 'https://example.com', label: 'Example Link' },
          ],
          additionalImage: "https://via.placeholder.com/500x300.png?text=Detailed+Image+1", // Path to the additional image
        },
      },
      {
        id: 11,
        image: 'https://via.placeholder.com/300x200.png?text=Advanced+1',
        title: 'Advanced Path 1',
        description: 'Analyze race data to refine performance.',
        buttonText: 'Complete',
        prerequisitePathIds: [9], // IDs of Level 1 paths that need to be completed
        level: 2,
        moreInfo: {
          description: 'Detailed description for Path One.',
          links: [
            { url: 'https://example.com', label: 'Example Link' },
          ],
          additionalImage: "https://via.placeholder.com/500x300.png?text=Detailed+Image+1", // Path to the additional image
        },
      },
      {
        id: 12,
        image: 'https://via.placeholder.com/300x200.png?text=Advanced+1',
        title: 'Advanced Path 1',
        description: 'Analyze race data to refine performance.',
        buttonText: 'Complete',
        prerequisitePathIds: [9], // IDs of Level 1 paths that need to be completed
        level: 2,
        moreInfo: {
          description: 'Detailed description for Path One.',
          links: [
            { url: 'https://example.com', label: 'Example Link' },
          ],
          additionalImage: "https://via.placeholder.com/500x300.png?text=Detailed+Image+1", // Path to the additional image
        },
      },
      {
        id: 13,
        image: 'https://via.placeholder.com/300x200.png?text=Advanced+1',
        title: 'Advanced Path 1',
        description: 'Analyze race data to refine performance.',
        buttonText: 'Complete',
        prerequisitePathIds: [9], // IDs of Level 1 paths that need to be completed
        level: 2,
        moreInfo: {
          description: 'Detailed description for Path One.',
          links: [
            { url: 'https://example.com', label: 'Example Link' },
          ],
          additionalImage: "https://via.placeholder.com/500x300.png?text=Detailed+Image+1", // Path to the additional image
        },
      },
      {
        id: 14,
        image: 'https://via.placeholder.com/300x200.png?text=Advanced+1',
        title: 'Advanced Path 1',
        description: 'Analyze race data to refine performance.',
        buttonText: 'Complete',
        prerequisitePathIds: [9], // IDs of Level 1 paths that need to be completed
        level: 2,
        moreInfo: {
          description: 'Detailed description for Path One.',
          links: [
            { url: 'https://example.com', label: 'Example Link' },
          ],
          additionalImage: "https://via.placeholder.com/500x300.png?text=Detailed+Image+1", // Path to the additional image
        },
      },
    ],
  },
  {
    level: 3,
    paths: [
      {
        id: 15,
        image: 'https://via.placeholder.com/300x200.png?text=Advanced+1',
        title: 'Advanced Path 1',
        description: 'Analyze race data to refine performance.',
        buttonText: 'Complete',
        prerequisitePathIds: [9], // IDs of Level 1 paths that need to be completed
        level: 3,
        moreInfo: {
          description: 'Detailed description for Path One.',
          links: [
            { url: 'https://example.com', label: 'Example Link' },
          ],
          additionalImage: "https://via.placeholder.com/500x300.png?text=Detailed+Image+1", // Path to the additional image
        },
      },
      {
        id: 16,
        image: 'https://via.placeholder.com/300x200.png?text=Advanced+1',
        title: 'Advanced Path 1',
        description: 'Analyze race data to refine performance.',
        buttonText: 'Complete',
        prerequisitePathIds: [15], // IDs of Level 1 paths that need to be completed
        level: 3,
        moreInfo: {
          description: 'Detailed description for Path One.',
          links: [
            { url: 'https://example.com', label: 'Example Link' },
          ],
          additionalImage: "https://via.placeholder.com/500x300.png?text=Detailed+Image+1", // Path to the additional image
        },
      },
      {
        id: 17,
        image: 'https://via.placeholder.com/300x200.png?text=Advanced+1',
        title: 'Advanced Path 1',
        description: 'Analyze race data to refine performance.',
        buttonText: 'Complete',
        prerequisitePathIds: [15], // IDs of Level 1 paths that need to be completed
        level: 3,
        moreInfo: {
          description: 'Detailed description for Path One.',
          links: [
            { url: 'https://example.com', label: 'Example Link' },
          ],
          additionalImage: "https://via.placeholder.com/500x300.png?text=Detailed+Image+1", // Path to the additional image
        },
      },
      {
        id: 18,
        image: 'https://via.placeholder.com/300x200.png?text=Advanced+1',
        title: 'Advanced Path 1',
        description: 'Analyze race data to refine performance.',
        buttonText: 'Complete',
        prerequisitePathIds: [15], // IDs of Level 1 paths that need to be completed
        level: 3,
        moreInfo: {
          description: 'Detailed description for Path One.',
          links: [
            { url: 'https://example.com', label: 'Example Link' },
          ],
          additionalImage: "https://via.placeholder.com/500x300.png?text=Detailed+Image+1", // Path to the additional image
        },
      },
    ],
  },
];

module.exports = careerData;

// export default careerData;
