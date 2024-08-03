const currentYear = new Date().getFullYear();
const data = {
    sitename: "Michael Adrian",
    sitetagline: "DocTao is on the way! ✨ 🔥",
    siteurl: "https://doctao.io",
    sitelogo: "",
    title: "DocTao is on the way! Now",
    description: "We're working hard on DocTao, a documentation aggregator that enhances your online experience with better search and update notifications. Stay tuned for more updates!",
    newsletterheading: "Do you want to stay updated?",
    copyrightText: `Copyright © ${currentYear} | Design and Developed By &nbsp;<a target="_blank" class="no-underline md:underline" href="https://github.com/fauxir">Michael Adrian</a>`,
    socialIconsHeading: "Follow Us On",
    hideSubscribeForm: false, // make true to disable subscription form 
    socialIcons: [
        {
            icon: "X",
            link: "https://x.com/Michael_AdrianT",
        },
    ],
    hide :{
        subscribeForm: false, // make true to disable subscription form         
        header: false,
        content: false,
        footer: false,
    }
}

export default data;
