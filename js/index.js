let translations;

fetch('languages.json')
    .then(response => response.json())
    .then(data => {
        translations = data;
        changeLanguage('en');  // Mặc định là tiếng Anh
    })
    .catch(error => console.error('Error loading language file:', error));

function changeLanguage(lang) {
    document.getElementById('page-title').textContent = translations[lang].title;
    document.getElementById('heading').textContent = translations[lang].title;
    document.getElementById('description').textContent = translations[lang].description;
}

{/* <button onclick="changeLanguage('en')">English</button>
    <button onclick="changeLanguage('vi')">Tiếng Việt</button> */}