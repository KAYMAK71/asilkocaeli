const navLinks = document.querySelectorAll('nav a');
const pages = document.querySelectorAll('.page');
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const ticketForm = document.getElementById('ticket-form');
const eventList = document.getElementById('event-list');
const eventSelect = document.getElementById('event-select');

// Türkiye'nin 81 ili ve rastgele otobüs fiyatları
const events = [
    { id: 1, name: 'Adana', price: Math.floor(Math.random() * 200) + 50 },
    { id: 2, name: 'Adıyaman', price: Math.floor(Math.random() * 200) + 50 },
    { id: 3, name: 'Afyonkarahisar', price: Math.floor(Math.random() * 200) + 50 },
    { id: 4, name: 'Ağrı', price: Math.floor(Math.random() * 200) + 50 },
    { id: 5, name: 'Amasya', price: Math.floor(Math.random() * 200) + 50 },
    { id: 6, name: 'Ankara', price: Math.floor(Math.random() * 200) + 50 },
    { id: 7, name: 'Antalya', price: Math.floor(Math.random() * 200) + 50 },
    { id: 8, name: 'Artvin', price: Math.floor(Math.random() * 200) + 50 },
    { id: 9, name: 'Aydın', price: Math.floor(Math.random() * 200) + 50 },
    { id: 10, name: 'Balıkesir', price: Math.floor(Math.random() * 200) + 50 },
    { id: 11, name: 'Bilecik', price: Math.floor(Math.random() * 200) + 50 },
    { id: 12, name: 'Bingöl', price: Math.floor(Math.random() * 200) + 50 },
    { id: 13, name: 'Bitlis', price: Math.floor(Math.random() * 200) + 50 },
    { id: 14, name: 'Bolu', price: Math.floor(Math.random() * 200) + 50 },
    { id: 15, name: 'Burdur', price: Math.floor(Math.random() * 200) + 50 },
    { id: 16, name: 'Bursa', price: Math.floor(Math.random() * 200) + 50 },
    { id: 17, name: 'Çanakkale', price: Math.floor(Math.random() * 200) + 50 },
    { id: 18, name: 'Çankırı', price: Math.floor(Math.random() * 200) + 50 },
    { id: 19, name: 'Çorum', price: Math.floor(Math.random() * 200) + 50 },
    { id: 20, name: 'Denizli', price: Math.floor(Math.random() * 200) + 50 },
    { id: 21, name: 'Diyarbakır', price: Math.floor(Math.random() * 200) + 50 },
    { id: 22, name: 'Edirne', price: Math.floor(Math.random() * 200) + 50 },
    { id: 23, name: 'Elazığ', price: Math.floor(Math.random() * 200) + 50 },
    { id: 24, name: 'Erzincan', price: Math.floor(Math.random() * 200) + 50 },
    { id: 25, name: 'Erzurum', price: Math.floor(Math.random() * 200) + 50 },
    { id: 26, name: 'Eskişehir', price: Math.floor(Math.random() * 200) + 50 },
    { id: 27, name: 'Gaziantep', price: Math.floor(Math.random() * 200) + 50 },
    { id: 28, name: 'Giresun', price: Math.floor(Math.random() * 200) + 50 },
    { id: 29, name: 'Gümüşhane', price: Math.floor(Math.random() * 200) + 50 },
    { id: 30, name: 'Hakkari', price: Math.floor(Math.random() * 200) + 50 },
    { id: 31, name: 'Hatay', price: Math.floor(Math.random() * 200) + 50 },
    { id: 32, name: 'Isparta', price: Math.floor(Math.random() * 200) + 50 },
    { id: 33, name: 'Mersin', price: Math.floor(Math.random() * 200) + 50 },
    { id: 34, name: 'İstanbul', price: Math.floor(Math.random() * 200) + 50 },
    { id: 35, name: 'İzmir', price: Math.floor(Math.random() * 200) + 50 },
    { id: 36, name: 'Kars', price: Math.floor(Math.random() * 200) + 50 },
    { id: 37, name: 'Kastamonu', price: Math.floor(Math.random() * 200) + 50 },
    { id: 38, name: 'Kayseri', price: Math.floor(Math.random() * 200) + 50 },
    { id: 39, name: 'Kırklareli', price: Math.floor(Math.random() * 200) + 50 },
    { id: 40, name: 'Kırşehir', price: Math.floor(Math.random() * 200) + 50 },
    { id: 41, name: 'Kocaeli', price: Math.floor(Math.random() * 200) + 50 },
    { id: 42, name: 'Konya', price: Math.floor(Math.random() * 200) + 50 },
    { id: 43, name: 'Kütahya', price: Math.floor(Math.random() * 200) + 50 },
    { id: 44, name: 'Malatya', price: Math.floor(Math.random() * 200) + 50 },
    { id: 45, name: 'Manisa', price: Math.floor(Math.random() * 200) + 50 },
    { id: 46, name: 'Kahramanmaraş', price: Math.floor(Math.random() * 200) + 50 },
    { id: 47, name: 'Mardin', price: Math.floor(Math.random() * 200) + 50 },
    { id: 48, name: 'Muğla', price: Math.floor(Math.random() * 200) + 50 },
    { id: 49, name: 'Muş', price: Math.floor(Math.random() * 200) + 50 },
    { id: 50, name: 'Nevşehir', price: Math.floor(Math.random() * 200) + 50 },
    { id: 51, name: 'Niğde', price: Math.floor(Math.random() * 200) + 50 },
    { id: 52, name: 'Ordu', price: Math.floor(Math.random() * 200) + 50 },
    { id: 53, name: 'Rize', price: Math.floor(Math.random() * 200) + 50 },
    { id: 54, name: 'Sakarya', price: Math.floor(Math.random() * 200) + 50 },
    { id: 55, name: 'Samsun', price: Math.floor(Math.random() * 200) + 50 },
    { id: 56, name: 'Siirt', price: Math.floor(Math.random() * 200) + 50 },
    { id: 57, name: 'Sinop', price: Math.floor(Math.random() * 200) + 50 },
    { id: 58, name: 'Sivas', price: Math.floor(Math.random() * 200) + 50 },
    { id: 59, name: 'Tekirdağ', price: Math.floor(Math.random() * 200) + 50 },
    { id: 60, name: 'Tokat', price: Math.floor(Math.random() * 200) + 50 },
    { id: 61, name: 'Trabzon', price: Math.floor(Math.random() * 200) + 50 },
    { id: 62, name: 'Tunceli', price: Math.floor(Math.random() * 200) + 50 },
    { id: 63, name: 'Şanlıurfa', price: Math.floor(Math.random() * 200) + 50 },
    { id: 64, name: 'Uşak', price: Math.floor(Math.random() * 200) + 50 },
    { id: 65, name: 'Van', price: Math.floor(Math.random() * 200) + 50 },
    { id: 66, name: 'Yozgat', price: Math.floor(Math.random() * 200) + 50 },
    { id: 67, name: 'Zonguldak', price: Math.floor(Math.random() * 200) + 50 },
    { id: 68, name: 'Aksaray', price: Math.floor(Math.random() * 200) + 50 },
    { id: 69, name: 'Bayburt', price: Math.floor(Math.random() * 200) + 50 },
    { id: 70, name: 'Karaman', price: Math.floor(Math.random() * 200) + 50 },
    { id: 71, name: 'Kırıkkale', price: Math.floor(Math.random() * 200) + 50 },
    { id: 72, name: 'Batman', price: Math.floor(Math.random() * 200) + 50 },
    { id: 73, name: 'Şırnak', price: Math.floor(Math.random() * 200) + 50 },
    { id: 74, name: 'Bartın', price: Math.floor(Math.random() * 200) + 50 },
    { id: 75, name: 'Ardahan', price: Math.floor(Math.random() * 200) + 50 },
    { id: 76, name: 'Iğdır', price: Math.floor(Math.random() * 200) + 50 },
    { id: 77, name: 'Yalova', price: Math.floor(Math.random() * 200) + 50 },
    { id: 78, name: 'Karabük', price: Math.floor(Math.random() * 200) + 50 },
    { id: 79, name: 'Kilis', price: Math.floor(Math.random() * 200) + 50 },
    { id: 80, name: 'Osmaniye', price: Math.floor(Math.random() * 200) + 50 },
    { id: 81, name: 'Düzce', price: Math.floor(Math.random() * 200) + 50 }
];

// Sayfa geçişleri
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = document.getElementById(`${e.target.dataset.page}-page`);
        pages.forEach(page => page.style.display = 'none');
        targetPage.style.display = 'block';
    });
});

// Etkinlikleri listeye ve seçim menüsüne ekle
events.forEach(event => {
    const eventItem = document.createElement('div');
    eventItem.classList.add('event-item');
    eventItem.textContent = `${event.name} - ${event.price} TL`;
    eventList.appendChild(eventItem);

    const option = document.createElement('option');
    option.value = event.id;
    option.textContent = event.name;
    eventSelect.appendChild(option);
});

// Kayıt olma işlemi
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    console.log('Kayıt bilgileri:', { username, email, password });
    alert('Kayıt başarılı! Şimdi giriş yapabilirsiniz.');
    
    registerForm.reset();
    document.querySelector('a[data-page="login"]').click();
});

// Giriş formu işlemi
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        alert('Giriş başarılı!');
        document.querySelector('a[data-page="tickets"]').click();
    } else {
        alert('Hatalı kullanıcı adı veya şifre!');
    }
});

// Bilet satın alma işlemi
ticketForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const eventId = eventSelect.value;
    const quantity = document.getElementById('ticket-quantity').value;

    const selectedEvent = events.find(event => event.id == eventId);
    if (selectedEvent) {
        const totalPrice = selectedEvent.price * quantity;
        alert(`${quantity} adet ${selectedEvent.name} otobüs bileti satın aldınız. Toplam tutar: ${totalPrice} TL`);
    } else {
        alert('Lütfen bir şehir seçin.');
    }
});

// Sayfa yüklendiğinde ana sayfayı göster
window.addEventListener('load', () => {
    document.getElementById('home-page').style.display = 'block';
});