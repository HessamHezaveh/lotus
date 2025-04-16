import { number } from "zod";



export const headerTitleList = [
  {
    id: 1,
    name: "Ana Sayfa",
    href: "/",
  },
  {
    id: 2,
    name: "Fiyat",
    href: "#price-form",
  },
  {
    id: 3,
    name: "Hakkımızda",
    href: "#about-us",
  },
  {
    id: 4,
    name: "İletişim",
    href: "#contact-us",
  },
];

export const heroData = {
  title: "Web Sitemize Hoş Geldiniz",
  mainTitle:"Lotus Yönetim&Danışmanlık",
  description: "Sizin için Yönetelim",
  buttonText: "Hemen Teklif Al!",
  buttonHref: "/services",
  image: {
    src: "/images/hero-image.jpg",
    alt: "Hero Image",
  },
};

export const servicesData = {
  title: "Hizmetler",
  description: "Bina yönetimi (apartman, site, toplu konut, iş merkezi) konusunda uzman ekibimizle, proje kurulumundan yasal başvurulara, bütçe yönetiminden genel kurul toplantılarına kadar tüm süreçleri güvenilir, hızlı ve şeffaf bir şekilde yönetiriz. Teknolojik altyapımız sayesinde aldığınız hizmeti ve finansal hareketleri kolaylıkla takip edebilme imkânı sunarız. Sizlere ve sevdiklerinize güvenilir ve huzurlu bir yaşam alanı oluşturma hedefiyle çalışırız.",
  services: [
    {
      id: 1,
      title: "Bahçe Bakımı",
      description: "Peyzaj düzenlemesi ve periyodik çim bakımı ile yeşil alanlarınızı koruruz.",
      icon: "SproutIcon",
    },
    {
      id: 2,
      title: "Bina Temizliği",
      description: "Rutin uygulamalarla ortak alanlarınızın temiz ve hijyenik kalmasını sağlarız.",
      icon: "TrashIcon",
    },
    {
      id: 3,
      title: "Tesis Yöneticiliği",
      description: "Deneyimli ve profesyonel ekibimizle tesisinizin tüm operasyonlarını yönetiriz.",
      icon:  "SettingsIcon",
    },
    {
      id: 4,
      title: "Teknik Servis",
      description: "Alanında uzman ekiplerle elektrik, su ve diğer teknik sorunlarınıza hızlı çözüm sunarız.",
      icon: "WrenchIcon",
    },
    {
      id: 5,
      title: "İlaçlama",
      description: "Çevreye duyarlı yöntemlerle zararlılara karşı etkili ve güvenli çözümler geliştiririz.",
      icon: "BugOffIcon", 
    },
    {
      id: 6,
      title: "Havuz Bakımı",
      description: "Düzenli bakım yaparak, havuzlarınızı hijyenik, sağlıklı ve temiz tutarız.",
      icon: "WavesIcon",
    },
  ],
};

export const aboutUsData = {
  title: "Hakkımızda",
  // description:
    // "Size en iyi hizmetleri sunan profesyonel bir ekibiz",
  text1:"Sektörde 10 yılı aşkın deneyimimizi, bina (apartman, site, toplu konut, iş merkezi) yönetimi konusunda 360 derece hizmet veren Lotus Yönetim ve Danışmanlık çatısı altında birleştirdik. Güvenilir, şeffaf, yenilikçi ve müşteri memnuniyeti odaklı hizmet anlayışımızla, bugün 1500’den fazla konuta hizmet vermekteyiz.  ",
  text2: "Sizlere ve sevdiklerinize güvenilir ve huzurlu bir yaşam alanı oluşturma hedefiyle çalışmaya devam ediyoruz.  ",
  image: {
    src: "/images/about-us.jpg",
    alt: "Hakkımızda Görseli",
  },
  
};
export const mapData = [
  {
    lat: 40.362572398982364, 
    lng: 30.667863815035918,
  },
  {
    lat: 40.762572398982364, 
    lng: 30.367863815035918,
  },
  {
    lat: 40.762572398982364, 
    lng: 30.967863815035918,
  },

]
export const countUpData = [
  {
    number: 15,
    title: "Yıllık Tecrübe ",
  },
  {
    number: 1500,
    title: "Müşteri ",
  },
  {
    number: 500,
    title: "Bina – Konut  ",
  },

]


export const featuresData = {
  title: "Features",
  description: "We provide the best features for you",
  features: [
    {
      id: 1,
      title: "Şeffaf Yönetim",
      description: "Tüm süreçlerinizde açık ve net iletişim kurarız.",
      icon:"SearchCheckIcon"
    },
    {
      id: 2,
      title: "Kaliteli Hizmet ",
      description: "Güvenilir ve işinin ehli ekiplerle kaliteli hizmet sunarız. ",
      icon:"HandshakeIcon"

    },
    {
      id: 3,
      title: "Hızlı Çözüm",
      description: "Sorunlarınıza anında ve etkili müdahale ederiz.",
      icon:"zapIcon"

    },
  ],
};

export const projectsData = {
  title: "Projects",
  description: "We provide the best projects for you",
  projects: [
    {
      id: 1,
      title: "Project 1",
      description: "Project 1 Description",
      image: {
        src: "/images/project-1.jpg",
        alt: "Project 1 Image",
      },
    },
    {
      id: 2,
      title: "Project 2",
      description: "Project 2 Description",
      image: {
        src: "/images/project-2.jpg",
        alt: "Project 2 Image",
      },
    },
    {
      id: 3,
      title: "Project 3",
      description: "Project 3 Description",
      image: {
        src: "/images/project-3.jpg",
        alt: "Project 3 Image",
      },
    },
  ],
};

export const testimonialsData = {
  title: "Testimonials",
  description: "We provide the best testimonials for you",
  testimonials: [
    {
      id: 1,
      name: "Testimonial 1",
      description: "Testimonial 1 Description",
      image: {
        src: "/images/testimonial-1.jpg",
        alt: "Testimonial 1 Image",
      },
    },
    {
      id: 2,
      name: "Testimonial 2",
      description: "Testimonial 2 Description",
      image: {
        src: "/images/testimonial-2.jpg",
        alt: "Testimonial 2 Image",
      },
    },
    {
      id: 3,
      name: "Testimonial 3",
      description: "Testimonial 3 Description",
      image: {
        src: "/images/testimonial-3.jpg",
        alt: "Testimonial 3 Image",
      },
    },
  ],
};

export const faqData = {
  title: "Sıkça Sorulan Sorular",
  description: "We provide the best FAQ for you",
  faqs: [
    {
      id: 1,
      question: "Ödediğimiz Aidatın Nereye, Nasıl Harcandığını Nasıl Bileceğiz?",
      answer: "Lotus Yönetim olarak şeffaf yönetim ilkesini benimsemekteyiz. Sahip olduğumuz internet tabanlı sistem Apsiyon uygulaması ile size sağladığımız “ kullanıcı adı/şifre” sayesinde harcamaları görebilirsiniz.",
    },
    {
      id: 2,
      question: "Yönetim Şirketiyle Çalışmak Maliyetli Olmaz mı?",
      answer: "Lotus Yönetim ile çalışmak maliyetli olmaz. Kaliteli hizmeti uygun fiyata sunmasının yanı sıra, öngörüleri, bütçe disiplini, uygun tedarikçi firma seçimi, zamanlaması ve etkin personel yönetimi ile size çok daha fazlasını kazandıracaktır.",
    },
    {
      id: 3,
      question: "Site Aidatlarını Sizin Hesabınıza mı Yatırıyoruz?",
      answer: "Hayır, Site aidatlarını Site Yönetiminin resmi banka hesaplarına yatırmalısınız. Şirketimiz banka hesaplarına aidat yatırılmamaktadır.",
    },
    {
      id:4,
      question:"Bizim 10 daireli Apartmanımız var,Site Yönetimi Kurmamıza Gerek Var mı?",
      answer:"Evet, Bağımsız bölüm sayısı 8 ya da daha fazla olan kat mülkiyetine tabi binalar için bir yönetici tayin etmek kanunen zorunludur (KMK 34 / I ). Ancak ana taşınmazın bütün bağımsız bölümleri tek bir kişinin mülkiyetindeyse, malik kanunen yönetici durumundadır."
    }
  ],
};

export const contactUsData = {
  title: "Contact Us",
  description: "Contact Us Description",
  image: {
    src: "/images/contact-us.jpg",
    alt: "Contact Us Image",
  },
};

export const footerData = {
  title: "Lotus Yonetim",
  description: "Lorem ipsum dolor sit amet.",
  
  image:{
    src:"/logo 3.png",
    alt:"logo"
  },
  contact:{
    title:"Contact us",
    address: "İstasyon Mahallesi Hürriyet Caddesi No:1/1 Kartepe Kocaeli",
  phone: "+905314937577",
  email: "info@lotussiteyonetimi.com/",
  },
  socials: {
    title:"Bizleri Takip Et",
    socialLinks:[
      {
        id: 1,
        name: "Facebook",
        icon: "FacebookIcon",
        href: "https://www.facebook.com",
      },
      {
        id: 2,
        name: "Whatsapp",
        icon: "WhatsappIcon",
        href: "https://www.Whatsapp.com",
      },

      {
        id: 3,
        name: "Instagram",
        icon: "InstagramIcon",
        href: "https://www.instagram.com",
      },
    ],
  },
  copyright:{
    text: "Lotus "
  }
};

export const formData ={
  title:"Hemen Fiyat Alın",
  description:"Formu doldurun, projeniz için size dönüş yapalım!",
  header:"Enter your details"
}

export const LogoImages = [
  {
      logoSrc:"/logos/1.jpg",
      alt:"logo-1"
  },
  {
      logoSrc:"/logos/1.jpg",
      alt:"logo-1"
  },
  {
      logoSrc:"/logos/1.jpg",
      alt:"logo-1"
  },
  {
      logoSrc:"/logos/1.jpg",
      alt:"logo-1"
  },
  {
      logoSrc:"/logos/1.jpg",
      alt:"logo-1"
  },
  {
      logoSrc:"/logos/1.jpg",
      alt:"logo-1"
  },
  {
      logoSrc:"/logos/1.jpg",
      alt:"logo-1"
  },
  {
      logoSrc:"/logos/1.jpg",
      alt:"logo-1"
  },


  // Second Sets of Logoes
  {
    logoSrc:"/logos/1.jpg",
    alt:"logo-1"
},
{
    logoSrc:"/logos/1.jpg",
    alt:"logo-1"
},
{
    logoSrc:"/logos/1.jpg",
    alt:"logo-1"
},
{
    logoSrc:"/logos/1.jpg",
    alt:"logo-1"
},
{
    logoSrc:"/logos/1.jpg",
    alt:"logo-1"
},
{
    logoSrc:"/logos/1.jpg",
    alt:"logo-1"
},
{
    logoSrc:"/logos/1.jpg",
    alt:"logo-1"
},
{
    logoSrc:"/logos/1.jpg",
    alt:"logo-1"
},

]
