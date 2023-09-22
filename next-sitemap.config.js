module.exports = {
  siteUrl: process.env.SITE_URL || 'https://julekonsert.com/',
  generateRobotsTxt: true, // (optional)
  // ...other options
  video: {
    items: [
      {
        url: 'https://res.cloudinary.com/dt3k2apqd/video/upload/v1694939017/Julekonsert/NT-O_Helga_Natt_V3_-_HD_1080p_hnzqpe.mov', // Replace with your video URL
        thumbnailUrl:
          'https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Julekonsert/O_Helga_Natt_temp_poster_vtbef9.webp', // Replace with your video's thumbnail URL
        title: 'O Helga Natt', // Replace with your video's title
        description:
          'Her er en smakebit på hva du kan se frem til på årets julekonsert med Nordic Tenors', // Replace with your video's description
        duration: 242, // Replace with your video's duration in seconds
        publicationDate: '2023-09-21T12:25:10.676Z', // Replace with the publication date
        tags: [
          'julekonsert',
          'julesang',
          'O Helga Natt',
          'Nordic Tenors',
          'Christmas with Nordic Tenors',
        ], // Replace with relevant tags
      },
      // Add more video items as needed
    ],
  },
}
