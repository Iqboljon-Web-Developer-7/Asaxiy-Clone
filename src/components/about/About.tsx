import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function About() {
  return (
    <div className="p-6 my-10 mx-4 rounded-xl bg-white shadow-sm">
      <h1 className="text-4xl text-center mb-3 font-semibold tracking-wider">
        Asaxiy kompaniyasi haqida
      </h1>
      <div className="text-center border-b mb-4">
        <p className="text-gray-700">
          Butun O‘zbekiston bo‘ylab maishiy texnika va elektronika tovarlarini
          yetkazib beruvchi kompaniyamizning asosiy afzalligi – ko‘p yillik ish
          tajribasi va yaxshi nom qozonib ulgurganidir.
        </p>
        <p className="text-gray-700 mb-6">
          Asos solinganidan buyon Asaxiy internet-do‘koni va uning jamoasi
          iste’mol bozorining talablari tendensiyalarini tinimsiz kuzatib
          kelmoqda; bu esa bizga eng so‘nggi texnologiyalar va innovatsion
          yechimlardan hamisha boxabar bo‘lib turish imkonini beradi.
        </p>
        <p className="mb-4">
          Kompaniiya mutaxassislari mijozlarimizning istaklarini diqqat bilan
          o‘rganishadi, shu bois resurs doimiy tarzda hamyonbop narxlardagi
          sifatli yangi mahsulotlar bilan boyitilib kelmoqda.
        </p>
      </div>

      <div className="w-full mx-auto">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger>Kompaniyaning ish tamoyili</AccordionTrigger>
            <AccordionContent className="mt-4 pl-4">
              <p>
                Har bir xaridor&nbsp;
                <span className="text-gray-800">
                  <a
                    href="https://asaxiy.uz/uz/product/telefony-i-gadzhety"
                    className="text-blue-500 underline"
                  >
                    <span lang="UZ-CYR" className="text-blue-500">
                      telefonlar va boshqa gadjetlar
                    </span>
                  </a>
                </span>
                <span lang="UZ-CYR" className="text-gray-800">
                  ni&nbsp;qulay shart-sharoitlarda, maksimal darajada tez tanlay
                  olishi kerak; shuning uchun biz intuitiv tushunarli menyu
                  yaratganmiz, internetning yangi foydalanuvchilari ham uni
                  o‘zlashtirib olishlari oson. Juda qulay bo‘lishini ko‘zlab biz
                  menyu qismini tegishli bo‘limlarga ajratganmiz, ularda siz 15
                  ming xildan ortiq orgtexnika va unga yondosh tovarlarni
                  topishingiz mumkin. Ular quyidagicha ko‘rinish olgan:
                </span>
              </p>
              <p className="text-left">
                <span className="text-base">
                  <span className="font-sans">
                    <span lang="UZ-CYR" className="text-gray-800">
                      &nbsp;•&nbsp;
                    </span>
                    <span className="text-gray-800">
                      <a
                        href="https://asaxiy.uz/uz/product/posuda"
                        className="text-blue-500 underline"
                      >
                        <span lang="UZ-CYR" className="text-blue-500">
                          idish-tovoqlar
                        </span>
                      </a>
                    </span>
                    <span lang="UZ-CYR" className="text-gray-800">
                      &nbsp;– bu yerda siz kundalik turmushimizda ishlatiladigan
                      turli-tuman uy-ro‘zg‘or buyumlarining eng keraklilarini
                      topasiz. Do‘konimiz saytida taqdim etilgan tovarlar yuqori
                      sifatga va mustahkamlikka ega;
                      <br />
                      &nbsp;•&nbsp;
                    </span>
                    <span className="text-gray-800">
                      <a
                        href="https://asaxiy.uz/uz/product/klimaticheskaya-tehnika/kondicionery"
                        className="text-blue-500 underline"
                      >
                        <span lang="UZ-CYR" className="text-blue-500">
                          konditsionerlar
                        </span>
                      </a>
                    </span>
                    <span lang="UZ-CYR" className="text-gray-800">
                      &nbsp;va uy iqlimi texnikasi – bu bo‘lim o‘z
                      ehtiyojlaringizga mos tarzda foydali xaridlar
                      qilishingizda ko‘maklashadi. Har bir tovarning tavsifi
                      berilgan, bu esa to‘g‘ri tanlash imkonini beradi;
                      <br />
                      &nbsp;•&nbsp;
                    </span>
                    <span className="text-gray-800">
                      <a
                        href="https://asaxiy.uz/uz/product/televizory-video-i-audio"
                        className="text-blue-500 underline"
                      >
                        <span lang="UZ-CYR" className="text-blue-500">
                          televizorlar, video va audio
                        </span>
                      </a>
                    </span>
                    <span lang="UZ-CYR" className="text-gray-800">
                      &nbsp;tovarlari navbatdagi bo‘limda joylashgan, bu bo‘lim
                      maishiy texnika mahsulotlari nomiga munosib. Bu yerda
                      zamon bilan hamqadam tarzdagi funksiyalarning to‘laqonli
                      ro‘yxatiga ega bo‘lgan eng so‘nggi yangi mahsulotlar va
                      ishlanmalar o‘rin olgan;
                      <br />
                      &nbsp;•&nbsp;
                    </span>
                    <span className="text-gray-800">
                      <a
                        href="https://asaxiy.uz/uz/product/bytovaya-tehnika/texniki-dlya-krasota-i-zdorove"
                        className="text-blue-500 underline"
                      >
                        <span lang="UZ-CYR" className="text-blue-500">
                          go‘zallik va salomatlik uchun texnika
                        </span>
                      </a>
                    </span>
                    <span lang="UZ-CYR" className="text-gray-800">
                      &nbsp;– doimiy xaridorlarimiz bo‘lmish ayol-qizlarga eng
                      sevimli bo‘limlardan biri. Zero, ular salomatlikning
                      qadriga yetishadi va to‘g‘ri ovqatlanish yo‘li bilan
                      tabiiy go‘zallikka intilishadi;
                      <br />
                      &nbsp;•&nbsp;
                    </span>
                    <span className="text-gray-800">
                      <a
                        href="https://asaxiy.uz/uz/product/kompyutery-i-orgtehnika"
                        className="text-blue-500 underline"
                      >
                        <span lang="UZ-CYR" className="text-blue-500">
                          Kompyuterlar va orgtexnika
                        </span>
                      </a>
                    </span>
                    <span lang="UZ-CYR" className="text-gray-800">
                      &nbsp;– eng katta bo‘lim, chunki u kompyuterlashtirish
                      jarayonini osonlashtirishga va ish vaqti sarfini
                      kamaytirishga mo‘ljallangan barcha turdagi aksessuarlar
                      hamda yordamchi butlovchi qismlarni ham o‘z ichiga olgan.
                    </span>
                  </span>
                </span>
              </p>
              <p className="text-left mt-4">
                <span className="text-base font-sans">
                  <span lang="UZ-CYR" className="text-gray-800">
                    Shuningdek, Asaxiy.uz kompaniyamiz o‘yin servislari
                    ishqibozlari haqida ham qayg‘uradi,{" "}
                  </span>
                  <span className="text-gray-800">
                    <a
                      href="https://asaxiy.uz/uz/product/dlya-gejmerov"
                      className="text-blue-500 underline"
                    >
                      <span lang="UZ-CYR" className="text-blue-500">
                        geymerlar uchun
                      </span>
                    </a>
                  </span>
                  <span className="text-gray-800">
                    {" "}
                    bo‘limi buning yaqqol dalilidir. Bu yerda qudratli kompyuter
                    ta’minoti mahsulotlari, o‘yinbop sichqoncha va klaviaturalar
                    taqdim etilgan; ular o‘yin jarayonini maksimal darajada aniq
                    va bexato amalga oshirishga imkon beradi.
                  </span>
                </span>
              </p>
              <p className="text-left text-base mt-4">
                <span className="font-sans text-gray-800">
                  Mutolaa ixlosmandlari uchun esa biz audio{" "}
                  <a
                    href="https://asaxiy.uz/uz/product/knigi"
                    className="text-blue-500 underline"
                  >
                    kitoblar
                  </a>{" "}
                  ko‘rinishida takomillashtirilgan adabiyot namunalarini taqdim
                  etmoqdamiz; ularning janr va mavzulari yetarlicha keng
                  ko‘lamli.
                </span>
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Bizning afzalliklarimiz</AccordionTrigger>
            <AccordionContent className="mt-4 pl-4">
              <p className="text-left">
                <span className="text-base font-sans">
                  <span lang="UZ-CYR" className="text-gray-800">
                    Asaxiy.uz kompaniyasi o‘zining barcha imkoniyatlarini
                    shiddat bilan kengaytirmoqda, bugun biz o‘z mijozlarimizga
                    ancha-muncha&nbsp;
                  </span>
                  <span className="text-gray-800">
                    <a
                      href="https://asaxiy.uz/uz/discount/product"
                      className="text-blue-500 underline"
                    >
                      <span lang="UZ-CYR" className="text-blue-500">
                        chegirmalar
                      </span>
                    </a>
                  </span>
                  <span lang="UZ-CYR" className="text-gray-800">
                    ni&nbsp;va bir qator shaharlarga tezkor yetkazib berishni
                    taklif etmoqdamiz. Bizning xizmat ko‘rsatish hududimizga
                    Andijon, Buxoro, Farg‘ona, Jizzax, Xorazm, Namangan, Navoiy,
                    Qashqadaryo, Samarqand, Sirdaryo, Surxondaryo va butun
                    Toshkent viloyatidagi, shuningdek, Qoraqalpog‘iston
                    Respublikasidagi shaharlar kiradi. Bu hali biz tovar
                    yetkazib berayotgan hududlarning to‘liq xaritasi emas.
                    Bizning yetkazib berish hududlarimiz bilan batafsil
                    tanishish uchun internet-do‘konimiz mutaxassisiga qo‘ng‘iroq
                    qilishingiz mumkin, u sizni qiziqtiruvchi barcha
                    ma’lumotlarni taqdim etadi.
                  </span>
                </span>
              </p>
              <p
                className="text-base font-sans text-gray-800 mt-4"
                lang="UZ-CYR"
              >
                Do‘konimizning har bir xaridori – hurmatli mehmonimizdir, unga
                biz yoqimli chegirmalar va bonus dasturlarini taklif etamiz. Biz
                mijoz talablariga mos tovarlarni tanlash jarayonida unga to‘liq
                hamrohlik qilamiz va istalgan qulay usul bilan yetkazib berishni
                amalga oshiramiz.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="mt-6 font-semibold">
        <p>"Asaxiy Books" MCHJ</p>
        <p>Ro'yxatdan o'tish raqami: 646439</p>
        <p>INN: 3058290008</p>
        <p>MCHJ rahbari: Allayev Firuz Abdunasimovich</p>
      </div>
    </div>
  );
}
