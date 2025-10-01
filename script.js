// Language dictionary (EN and AR)
const I18N = {
  en: {
    brand: "InnoLiving",
    "nav.home": "Home",
    "nav.how": "How It Works",
    "nav.packages": "Packages",
    "nav.projects": "Projects",
    "nav.reviews": "Reviews",
    "nav.about": "About",
    "nav.support": "Support",
    "cta.book": "Book a Free Assessment",
    "cta.seeHow": "See How It Works",
    "cta.explorePackages": "Explore Packages",
    "cta.addPlan": "Add to My Plan",
    "lang.toggle": "العربية",
    "home.h1": "A Safer, Smarter, Effortless Home",
    "home.sub":
      "We design and install simple automations that protect your home and make everyday life easier—without the tech headache.",
    "badges.licensed": "Licensed & Insured",
    "badges.warranty": "2-Year Hardware Warranty",
    "badges.clean": "Clean, Professional Install",
    "media.hero": "Hero Image/Video",
    "media.story": "Illustration/Photo",
    "media.project": "Project Image",
    "media.team": "Team Photo",
    "media.support": "Support Imagery",
    "pillars.safety.title": "Safety",
    "pillars.safety.desc":
      "Prevent leaks, smoke, and intrusions—automatically.",
    "pillars.comfort.title": "Comfort",
    "pillars.comfort.desc": "Lights, AC, and curtains that adjust to you.",
    "pillars.control.title": "Control",
    "pillars.control.desc":
      "Everything from your phone or voice. No tech skills needed.",
    "moments.h2": "What can a smart home do for me?",
    "moments.morning.title": "Morning",
    "moments.morning.desc":
      "Wake up to gentle lights and the perfect room temperature.",
    "moments.away.title": "Away",
    "moments.away.desc":
      "Doors lock, leaks shut off, and you get instant alerts.",
    "moments.night.title": "Night",
    "moments.night.desc":
      "One tap turns off lights, closes curtains, and arms the home.",
    "how.h2": "From Idea to “Wow” — In Three Simple Steps",
    "how.sub": "We handle the tech. You enjoy the comfort.",
    "how.s1.title": "Free Home Assessment",
    "how.s1.desc":
      "We walk through your rooms, check Wi‑Fi coverage, doors, water points, and your routines. No obligation.",
    "how.s2.title": "Design Your Plan",
    "how.s2.desc":
      "We recommend a simple package tailored to your home and budget. Clear pricing, no jargon.",
    "how.s3.title": "Pro Install + Training",
    "how.s3.desc":
      "Clean cabling, tidy finishes. We set up scenes you choose and show you how to use it in minutes.",
    "how.after.title": "Aftercare",
    "how.after.desc":
      "Fast local support and a 2‑year hardware warranty. It just works—day after day.",
    "packages.h2": "Simple Packages. Real Results.",
    "packages.sub":
      "Choose your package—comfort and lifestyle, safety and essentials, or connectivity and surveillance. Or combine them all for a complete smart home.",
    includes: "Includes",
    "quantity.item": "- Quantity",
    "pk-price": "Starting From",
    "price-pk-1":
      "<img src='visuals/Saudi-Riyal-Symbol.png' alt='SAR' /> 11,925",
    "price-pk-2":
      "<img src='visuals/Saudi-Riyal-Symbol.png' alt='SAR' /> 6,210",
    "price-pk-3":
      "<img src='visuals/Saudi-Riyal-Symbol.png' alt='SAR' /> 2,980",
    "pkg1.title": "Package 1: Connectivity & Surveillance Cameras",
    "pkg1.tag": "Establish a communication and monitoring system for your home",
    "pkg1.b1": "Extend your Wi-Fi network to every corner”",
    "pkg1.b2": "Intercom Sound and Video",
    "pkg1.b3": "Monitor your home remotely via mobile apps",
    "pkg1.i1": "Wi-Fi network extender & access points",
    "pkg1.i2": "Intercom",
    "pkg1.i3": "Surveillance cameras (CCTV)",
    "pkg1.i4": "Home Rack Cabinet for CCTV Recorder",
    "pkg1.ideal":
      "<strong>Ideal for:</strong> New or larger homes, anyone serious about reliability and security.",
    "pkg2.title": "Package 2: Safety & Essentials",
    "pkg2.tag": "Protect your home from leaks, accidents, and intrusions",
    "pkg2.b1":
      "Instantly stop water flow from the app to prevent leaks or tank overflow damage",
    "pkg2.b2": "Water leakage detection",
    "pkg2.b3": "Fire and smoke alarms",
    "pkg2.b4": "motion detection alert",
    "pkg2.b5":
      "Smart monitoring of temperature and humidity for automatic climate control",
    "pkg2.i1": "Smart Door Lock",
    "pkg2.i2": "Light Motion Sensor",
    "pkg2.i3": "Smoke Detection",
    "pkg2.i4": "Gas Detection",
    "pkg2.i5": "Water leakage sensor",
    "pkg2.i6": "Humidity & temperature sensor",
    "pkg2.i7": "Smart water valve shut-off system",
    "pkg2.i8": "Water Level Sensor for home tank to detect leakage or overflow",
    "pkg2.i9": "Smart Control Panel",
    "pkg2.ideal":
      "<strong>Ideal for:</strong> homeowners who value peace of mind and safety essentials",
    "pkg3.title": "Package 3: Comfort & Quality of Life",
    "pkg3.tag": "Everyday luxury you can feel from day one.",
    "pkg3.b1": "Smart lighting that adapts to your daily routines",
    "pkg3.b2": "Automatic blinds that sync with sunlight and close at night",
    "pkg3.b3": "controlling A/C and TV from mobile",
    "pkg3.b4":
      "Open/close garage door remotely and receive alerts when left open",
    "pkg3.b5": "Automated garden irrigation system that saves water",
    "pkg3.i1": "Smart Switches",
    "pkg3.i2": "Smart Curtain",
    "pkg3.i3": "Smart A/C and TV controller unit",
    "pkg3.i4": "Smart Garage Door Controller",
    "pkg3.i5": "Smart Water Timer",
    "pkg3.ideal":
      "<strong>Ideal for:</strong> families seeking comfort and improved quality of life",
    "packages.note":
      "<strong>Tip:</strong> Combine Package 1 + 2 for <em>secure smart home</em>, or add Package 3 for a complete <strong> smart living experience </strong>",
    "story.h2": "Stop Water Damage Before It Starts",
    "story.p":
      "A single leak can cause thousands in damage. Our system detects leaks and shuts your water off in seconds—automatically.",
    "story.cta": "See Safety Package",
    "projects.h2": "Real Homes, Real Results",
    "projects.sub":
      "Before/after snapshots and short stories from happy customers.",
    "label.challenge": "Challenge:",
    "label.solution": "Solution:",
    "label.result": "Result:",
    "proj1.title": "Family Villa, [Area]",
    "proj1.challenge":
      "Frequent Wi‑Fi dropouts; worry about leaks when traveling",
    "proj1.solution": "Package 1 + Package 2",
    "proj1.result": "Whole‑home coverage and auto shutoff for peace of mind",
    "proj2.title": "Apartment, [Area]",
    "proj2.challenge": "Make AC/TV smart without renovations",
    "proj2.solution": "Package 3 (IR control + scenes)",
    "proj2.result": "One‑tap movie nights; energy‑friendly schedules",
    "proj3.title": "Townhouse, [Area]",
    "proj3.challenge": "Late‑night arrivals and hands‑full entry",
    "proj3.solution": "Smart Door Lock + Garage Controller + Scenes",
    "proj3.result": "Easy, secure access for the whole family",
    "reviews.h2": "What Homeowners Are Saying",
    "reviews.sub": "Simple installs, clear pricing, and support that cares.",
    "rev1.p": "“We sleep better knowing leaks can’t surprise us.”",
    "rev1.f": "— Ahmed R., [Neighborhood]",
    "stats.avg": "Average rating",
    "stats.devices": "Devices installed",
    "stats.y2n": "2 years",
    "stats.warranty": "Hardware warranty",
    "about.h2": "We Make Home Tech Invisible — and Useful",
    "about.p":
      "We started InnoLiving to remove the complexity from smart homes. We believe technology should protect your family, simplify your routines, and stay out of the way.",
    "about.v1":
      "<strong>Clean Install:</strong> Respectful, tidy work—shoe covers and vacuumed floors.",
    "about.v2": "<strong>Clear Pricing:</strong> Fixed quotes. No surprises.",
    "about.v3":
      "<strong>Fast Support:</strong> Real people who know your home.",
    "about.v4":
      "<strong>Trusted Hardware:</strong> Reliable brands we stand behind.",
    "about.meta":
      "Licensed & Insured • Service Areas: [List] • Based in [City]",
    "support.h2": "We’re Here to Help",
    "support.sub": "Quick answers, fast fixes, friendly techs.",
    "support.phoneL": "Phone/WhatsApp:",
    "support.emailL": "Email:",
    "support.hoursL": "Hours:",
    "support.hoursV": "Mon–Sat, 9–7",
    "support.guidesH": "Quick Guides",
    "support.g1": "Power Cycle Cheat Sheet",
    "support.g2": "Rename/Organize Scenes",
    "support.g3": "When to Call Us (and what we’ll ask)",
    "support.warrantyL": "Warranty:",
    "support.warrantyV": "2‑Year Hardware Warranty",
    "support.finishL": "Fit & Finish:",
    "support.finishV": "90 days",
    "book.h2": "Let’s Make Your Home Safer and Easier",
    "book.sub": "30–45 minutes. No obligation. Clear plan and price.",
    "book.submit": "Book My Free Assessment",
    "book.note":
      'Prefer WhatsApp? Message us at <a href="https://wa.me/966XXXXXXXXX" target="_blank" rel="noopener">+966 XXX XXX XXX</a>.',
    "form.name": "Name",
    "form.namePh": "Your name",
    "form.phone": "Phone/WhatsApp",
    "form.phonePh": "+966 ...",
    "form.email": "Email (optional)",
    "form.emailPh": "you@example.com",
    "form.location": "Location",
    "form.lt.dammam": "Dammam",
    "form.lt.khobar": "Khobar",
    "form.lt.dhahran": "Dhahran",
    "form.lt.aziziyah": "Aziziyah",
    "form.homeType": "Home Type",
    "form.select": "Select",
    "form.ht.apartment": "Apartment",
    "form.ht.villa": "Villa",
    "form.ht.townhouse": "Townhouse",
    "form.ht.other": "Other",
    "form.goal": "Primary Goal",
    "form.g.safety": "Safety",
    "form.g.comfort": "Comfort",
    "form.g.both": "Both",
    "form.time": "Preferred Time",
    "form.t.morning": "Morning",
    "form.t.afternoon": "Afternoon",
    "form.t.evening": "Evening",
    "footer.tag": "Smart home, made simple. Serving [Service Areas].",
    "footer.company": "Company",
    "footer.help": "Help",
    "footer.start": "Get Started",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.contact":
      '<a class="btn-whatsapp" href="#" onclick="openWhatsApp(); return false;"><i class="ph ph-whatsapp-logo"></i></a><a class="btn btn-mail" href="mailto:info@innoliving-co.com"><img src="visuals/Mail-icon.png" alt="Mail"/>Email Us</a>',
    "footer.copy": "©",
    "footer.rights": "All rights reserved.",
    "c-address": "Saudi Arabia - Dhahran",
  },
  ar: {
    brand: "InnoLiving",
    "c-address": "السعودية - الظهران",
    "nav.home": "الرئيسية",
    "nav.how": "كيف نعمل",
    "nav.packages": "الباقات",
    "nav.projects": "الأعمال",
    "nav.reviews": "آراء العملاء",
    "nav.about": "من نحن",
    "nav.support": "الدعم",
    "cta.book": "احجز تقييمًا مجانيًا",
    "cta.seeHow": "تعرّف على الطريقة",
    "cta.explorePackages": "استكشف الباقات",
    "cta.addPlan": "أضفها إلى خطتي",
    "lang.toggle": "English",
    "home.h1": "منزل أكثر أماناً وذكاءً وسهولة",
    "home.sub":
      "نصمّم ونركّب أتمتة بسيطة تحمي منزلك وتسهّل يومك—بدون تعقيد تقني.",
    "badges.licensed": "مرخّصون ومؤمّنون",
    "badges.warranty": "ضمان على الأجهزة لسنتين",
    "badges.clean": "تركيب احترافي ونظيف",
    "media.hero": "صورة/فيديو الغلاف",
    "media.story": "صورة/رسم توضيحي",
    "media.project": "صورة المشروع",
    "media.team": "صورة الفريق",
    "media.support": "صورة/رسوم للدعم",
    "pillars.safety.title": "الأمان",
    "pillars.safety.desc": "منع التسريبات والدخان والتطفّل—بشكل تلقائي.",
    "pillars.comfort.title": "الراحة",
    "pillars.comfort.desc": "الإضاءة والمكيّف والستائر تتكيّف معك.",
    "pillars.control.title": "التحكّم",
    "pillars.control.desc": "كل شيء من جوالك أو بصوتك. بلا مهارات تقنية.",
    "moments.h2": "ماذا يقدّم لي المنزل الذكي؟",
    "moments.morning.title": "الصباح",
    "moments.morning.desc": "استيقظ على إضاءة لطيفة ودرجة حرارة مثالية.",
    "moments.away.title": "خارج المنزل",
    "moments.away.desc":
      "الأبواب تُغلَق، التسريب يُوقَف، وتصلُك التنبيهات فوراً.",
    "moments.night.title": "الليل",
    "moments.night.desc":
      "بضغطة واحدة: إطفاء الأضواء، إغلاق الستائر، وتأمين المنزل.",
    "how.h2": "من الفكرة إلى “واو” — بثلاث خطوات بسيطة",
    "how.sub": "نحن نتولّى التقنية. وأنت تستمتع بالنتيجة.",
    "how.s1.title": "تقييم منزلي مجاني",
    "how.s1.desc":
      "نزور منزلك، نراجع تغطية الواي فاي، الأبواب، مصادر المياه، وروتينك اليومي. بدون التزام.",
    "how.s2.title": "تصميم خطتك",
    "how.s2.desc":
      "نقترح باقة مناسبة لمنزلك وميزانيتك. تسعير واضح ودون مصطلحات معقّدة.",
    "how.s3.title": "تركيب احترافي + تدريب",
    "how.s3.desc":
      "تمديدات نظيفة وتشطيب أنيق. نضبط مشاهدك ونشرح الاستخدام في دقائق.",
    "how.after.title": "خدمة ما بعد البيع",
    "how.after.desc":
      "دعم محلي سريع وضمان أجهزة لسنتين. يعمل باستقرار يوماً بعد يوم.",
    "packages.h2": "باقات بسيطة. نتائج حقيقية.",
    "packages.sub":
      "اختر باقتك—السلامة والأساسيات أو الراحة وجودة الحياة. أو اجمع بينهما لمنزل متكامل.",
    includes: "تشمل",
    "quantity.item": " -  عدد",
    "pk-price": "تبدأ من",
    "price-pk-1":
      " 11,925 <img src='visuals/Saudi-Riyal-Symbol.png' alt='ر.س' />",
    "price-pk-2":
      " 6,210 <img src='visuals/Saudi-Riyal-Symbol.png' alt='ر.س' />",
    "price-pk-3":
      " 2,980 <img src='visuals/Saudi-Riyal-Symbol.png' alt='ر.س' />",
    "pkg1.title": "الباقة 1: التواصل وكاميرات المراقبة",
    "pkg1.tag": "اسس نظام التواصل والمراقبة لمنزلك",
    "pkg1.b1": "مراقبة محيط المنزل بالكاميرات",
    "pkg1.b2": "انتركوم بالكاميرا صوت وصوره",
    "pkg1.b3": "واي فاي بتغطية كاملة للمنزل",
    "pkg1.i1": "تمديد شبكة الواي فاي ونقاط الوصول",
    "pkg1.i2": "جهاز الانتركوم ",
    "pkg1.i3": "كاميرات المراقبة (CCTV)",
    "pkg1.i4": "خزانة منزلية لجهاز تسجيل كاميرات المراقبة",
    "pkg1.ideal":
      "<strong>مثالية لـ:</strong> المنازل الجديدة لتاسيس نظام التواصل والمراقبة.",
    "pkg2.title": "الباقة 2: السلامة و الأساسيات",
    "pkg2.tag": "احمِ منزلك من التسريبات و الحوادث و التطفلً.",
    "pkg2.b1": "إيقاف الماء من خلال التطبيق عند اكتشاف تسريب او طفح",
    "pkg2.b2": "تنبيهات فورية للدخان",
    "pkg2.b3": "تنبيهات فورية بالحركة داخل المنزل",
    "pkg2.b4": "مراقبة درجة الحرارة ورطوبة المنزل للتحكم بالتكييف تلقائيا",
    "pkg2.b5": "دخول ذكي للمنزل",
    "pkg2.i1": "قفل باب ذكي",
    "pkg2.i2": "حساس حركة الضوء",
    "pkg2.i3": "حساس دخان ",
    "pkg2.i4": "حساس تسرب المياة ",
    "pkg2.i5": "مستشعر حرارة ورطوبة ",
    "pkg2.i6":
      "صمام ماء ذكي لحساب استهلاك المياه مع امكانية التحكم بفتح واغلاق المياه عن طريق التطبيق",
    "pkg2.i7":
      "حساس مستوى المياه في خزانات المنزل لاستشعار التسريب و فيضان المياه",
    "pkg2.i8": "لوحة تحكّم للأجهزة الذكية",
    "pkg2.ideal":
      "<strong>مثالية لـ:</strong> أصحاب المنازل الباحثين عن راحة البال ومتطلبات السلامة.",
    "pkg3.title": "الباقة 3: الراحة وجودة الحياة",
    "pkg3.tag": "رفاهية يومية تشعر بها من أول يوم.",
    "pkg3.b1": "برمجة الاضاءة الخارجية والداخليه لتعمل حسب اعدادات مفضلة",
    "pkg3.b2": "ستائر تفتح مع نور الشمس وتغلق ليلًاً",
    "pkg3.b3": "وحدة تحكّم  عبر الواي فاي (المكيّف/التلفاز)",
    "pkg3.b4": "التحكم بفتح واغلاق الجراج عن بعد والتنبيه عند تركه مفتوحا",
    "pkg3.b5": "سقي الحديقة تلقائيًا وتوفير المياه",
    "pkg3.i1": "مفاتيح ذكية",
    "pkg3.i2": "ستارة/ستائر ذكية",
    "pkg3.i3": "وحدة تحكّم  عبر الواي فاي (المكيّف/التلفاز)",
    "pkg3.i4": "متحكّم باب الجراج الذكي",
    "pkg3.i5": "مؤقّت ماء ذكي",
    "pkg3.ideal":
      "<strong>مثالية لـ:</strong> العائلات والباحثين عن الراحة وجودة الحياة.",
    "packages.note":
      "<strong>نصيحة:</strong> اجمع 1 + 2 لمنزل <em>محمي</em>، و1 + 3 لمنزل <em>مريح</em>، أو الثلاث معًا لمنزل <em>متكامل</em>.",
    "story.h2": "أوقف أضرار المياه قبل أن تبدأ",
    "story.p":
      "تسريب واحد قد يكلّفك الكثير. نظامنا يكتشف التسريب ويغلق الماء خلال ثوان—تلقائياً.",
    "story.cta": "تعرّف على باقة السلامة",
    "projects.h2": "منازل حقيقية، نتائج حقيقية",
    "projects.sub": "لقطات قبل/بعد وقصص قصيرة من عملائنا السعداء.",
    "label.challenge": "التحدّي:",
    "label.solution": "الحل:",
    "label.result": "النتيجة:",
    "proj1.title": "فيلا عائلية، [المنطقة]",
    "proj1.challenge": "انقطاع واي فاي متكرر؛ قلق من التسريبات أثناء السفر",
    "proj1.solution": "الباقة 1 + الباقة 2",
    "proj1.result": "تغطية شاملة وإيقاف تلقائي للماء لراحة البال",
    "proj2.title": "شقة، [المنطقة]",
    "proj2.challenge": "جعل المكيّف/التلفاز أذكياء بدون ترميم",
    "proj2.solution": "الباقة 3 (تحكّم IR + مشاهد)",
    "proj2.result": "ليالي سينما بضغطة واحدة وجداول موفّرة للطاقة",
    "proj3.title": "تاونهاوس، [المنطقة]",
    "proj3.challenge": "الوصول ليلاً والدخول والأيدي مشغولة",
    "proj3.solution": "قفل باب ذكي + متحكّم الجراج + مشاهد",
    "proj3.result": "دخول سهل وآمن لكل أفراد العائلة",
    "reviews.h2": "ماذا يقول عملاؤنا",
    "reviews.sub": "تركيب بسيط، تسعير واضح، ودعم يهتم بك.",
    "rev1.p": "“ننام مرتاحين ونحن نعلم أن التسريبات لن تفاجئنا.”",
    "rev1.f": "— أحمد ر., [الحي]",
    "stats.avg": "متوسط التقييم",
    "stats.devices": "جهاز مركّب",
    "stats.y2n": "سنتان",
    "stats.warranty": "ضمان أجهزة",
    "about.h2": "نجعل التقنية غير مرئية—لكن مفيدة",
    "about.p":
      "أسّسنا InnoLiving لإزالة التعقيد عن المنازل الذكية. التقنية يجب أن تحمي عائلتك وتبسط يومك وتبقى خلف الكواليس.",
    "about.v1": "<strong>تركيب نظيف:</strong> احترام للمنزل وتشطيب مرتب.",
    "about.v2": "<strong>تسعير واضح:</strong> عروض ثابتة دون مفاجآت.",
    "about.v3": "<strong>دعم سريع:</strong> أشخاص حقيقيون يعرفون منزلك.",
    "about.v4": "<strong>أجهزة موثوقة:</strong> علامات نعتمدها ونضمنها.",
    "about.meta":
      "مرخّصون ومؤمّنون • مناطق الخدمة: [اكتب المناطق] • مقرّنا: [المدينة]",
    "support.h2": "نحن هنا لمساعدتك",
    "support.sub": "إجابات سريعة، حلول فورية، وفنيون ودودون.",
    "support.phoneL": "هاتف/واتساب:",
    "support.emailL": "بريد إلكتروني:",
    "support.hoursL": "الدوام:",
    "support.hoursV": "الاثنين–السبت، 9–7",
    "support.guidesH": "أدلة سريعة",
    "support.g1": "دليل إعادة التشغيل",
    "support.g2": "إعادة تسمية/تنظيم المشاهد",
    "support.g3": "متى تتواصل معنا (وما الذي سنسألك عنه)",
    "support.warrantyL": "الضمان:",
    "support.warrantyV": "ضمان سنتين على الأجهزة",
    "support.finishL": "التشطيب:",
    "support.finishV": "90 يوماً",
    "book.h2": "خلّينا نجعل منزلك أكثر أماناً وأسهل استخداماً",
    "book.sub": "30–45 دقيقة. بدون التزام. خطة وسعر واضحان.",
    "book.submit": "احجز تقييمي المجاني",
    "book.note":
      'تفضّل واتساب؟ راسلنا على <a href="https://wa.me/966XXXXXXXXX" target="_blank" rel="noopener"><span dir="ltr">+966 XXX XXX XXX</span></a>.',
    "form.name": "الاسم",
    "form.namePh": "اسمك",
    "form.phone": "هاتف/واتساب",
    "form.phonePh": "+966 ...",
    "form.email": "البريد الإلكتروني (اختياري)",
    "form.emailPh": "أنت@مثال.كوم",
    "form.location": "الموقع",
    "form.lt.dammam": "الدمام",
    "form.lt.khobar": "الخبر",
    "form.lt.dhahran": "الظهران",
    "form.lt.aziziyah": "العزيزية",
    "form.select": "اختيار",
    "form.homeType": "نوع المنزل",
    "form.ht.apartment": "شقة",
    "form.ht.villa": "فيلا",
    "form.ht.townhouse": "تاونهاوس",
    "form.ht.other": "غير ذلك",
    "form.goal": "الهدف الأساسي",
    "form.g.safety": "السلامة",
    "form.g.comfort": "الراحة",
    "form.g.both": "الاثنان",
    "form.time": "الوقت المناسب",
    "form.t.morning": "الصباح",
    "form.t.afternoon": "العصر",
    "form.t.evening": "المساء",
    "footer.tag": "منزل ذكي… ببساطة. نخدم: [مناطق الخدمة].",
    "footer.company": "الشركة",
    "footer.help": "المساعدة",
    "footer.start": "ابدأ الآن",
    "footer.privacy": "الخصوصية",
    "footer.terms": "الشروط",
    "footer.contact":
      '<a class="btn-whatsapp" href="#" onclick="openWhatsApp(); return false;"><i class="ph ph-whatsapp-logo"></i></a><a class="btn btn-mail" href="mailto:info@innoliving-co.com" style="width:150px";"><img src="visuals/Mail-icon.png" alt="Mail"/>راسلنا</a>',
    "footer.copy": "©",
    "footer.rights": "جميع الحقوق محفوظة.",
  },
};

// Apply translations to [data-i18n] and placeholders
function applyI18n(lang) {
  const dict = I18N[lang];
  document.documentElement.lang = lang === "ar" ? "ar" : "en";
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });
  const toggle = document.getElementById("langToggle");
  if (toggle)
    toggle.textContent =
      dict["lang.toggle"] || (lang === "ar" ? "English" : "العربية");
  localStorage.setItem("innoLang", lang);
}

// Language toggle
const langToggleBtn = document.getElementById("langToggle");
if (langToggleBtn) {
  langToggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("lang") || "en";
    const next = current === "ar" ? "en" : "ar";
    applyI18n(next);
  });
}

// Init language
(function initLang() {
  const saved = localStorage.getItem("innoLang");
  const browser = (navigator.language || "en").startsWith("ar") ? "ar" : "en";
  applyI18n(saved || browser);
})();

// Mobile nav
const navToggle = document.querySelector(".nav-toggle");
const navIcon = document.querySelector(".nav-toggle .nav-icon");
const navList = document.querySelector(".nav-list");

if (navToggle && navIcon && navList) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navList.classList.toggle("show");

    // Change icon based on state
    navIcon.textContent = expanded ? "☰" : "✖";
  });

  // Close nav on link click
  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("show");
      navToggle.setAttribute("aria-expanded", "false");
      navIcon.textContent = "☰";
    });
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const id = this.getAttribute("href").slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", `#${id}`);
    }
  });
});

// Year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Splash slider + parallax
(function () {
  const slides = Array.from(document.querySelectorAll(".splash-slide"));
  const dots = Array.from(document.querySelectorAll(".splash-dots .dot"));
  const stage = document.querySelector(".splash-stage");

  if (!slides.length || !dots.length || !stage) return;

  let idx = 0;
  let timer;

  function show(i) {
    slides.forEach((s, k) => {
      s.classList.remove("is-active");
      s.setAttribute("aria-hidden", "true");
    });
    dots.forEach((d, k) => {
      d.classList.remove("is-active");
      d.setAttribute("aria-selected", "false");
    });

    slides[i].classList.add("is-active");
    slides[i].setAttribute("aria-hidden", "false");

    dots[i].classList.add("is-active");
    dots[i].setAttribute("aria-selected", "true");

    idx = i;
  }

  function next() {
    show((idx + 1) % slides.length);
  }

  function start() {
    timer = setInterval(next, 5000);
  }

  function stop() {
    clearInterval(timer);
  }

  // Dot click events only
  dots.forEach((d, k) =>
    d.addEventListener("click", () => {
      stop();
      show(k);
      start();
    })
  );

  // No hover, no keyboard, no effects

  show(0);
  start();
})();

function openWhatsApp() {
  window.open("https://wa.me/+966575020802", "_blank");
}
