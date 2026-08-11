const SCHOOL_INFO = {
    name: "OM SHANTI ACADEMY",
    tagline: "An activity based school",
    logoPath: "../assets/school_logo.png",
    competitionTitle: "अन्तर टोल विकास संस्था महिला (आमा) समूह हाजिरी जवाफ प्रतियोगिता २०८२"
};

function loadCommonHeader() {
    const headers = document.querySelectorAll('.header');
    headers.forEach(header => {
        // Update school name
        const schoolName = header.querySelector('.school-info h1');
        if (schoolName) schoolName.textContent = SCHOOL_INFO.name;
        
        // Update tagline
        const tagline = header.querySelector('.school-tagline');
        if (tagline) tagline.textContent = SCHOOL_INFO.tagline;
        
        // Update logo
        const logo = header.querySelector('.school-logo img');
        if (logo) logo.src = SCHOOL_INFO.logoPath;
        
        // Update competition title
        const compTitle = header.querySelector('.competition-title, .competition-title-main');
        if (compTitle) compTitle.textContent = SCHOOL_INFO.competitionTitle;
    });
}

// Run when page loads
document.addEventListener('DOMContentLoaded', loadCommonHeader);