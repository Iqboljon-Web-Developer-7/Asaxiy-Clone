import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{t("about_asaxiy")}</h1>
      <p className="mb-4">{t("about_asaxiy_p1")}</p>
      <p className="mb-4">{t("about_asaxiy_p2")}</p>
      <p className="mb-6">{t("about_asaxiy_p3")}</p>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{t("accordion_title_1")}</AccordionTrigger>
          <AccordionContent>
            <p className="mb-4">{t("company_principle_1")}</p>
            <ul className="list-disc list-inside mb-4">
              <li>{t("company_principle_list_1")}</li>
              <li>{t("company_principle_list_2")}</li>
              <li>{t("company_principle_list_3")}</li>
              <li>{t("company_principle_list_4")}</li>
              <li>{t("company_principle_list_5")}</li>
            </ul>
            <p className="mb-4">{t("company_principle_2")}</p>
            <p>{t("company_principle_3")}</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>{t("accordion_title_2")}</AccordionTrigger>
          <AccordionContent>
            <p className="mb-4">{t("our_advantages_1")}</p>
            <p>{t("our_advantages_2")}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-10 border-t pt-6">
        <p>{t("company_info")}</p>
        <p>{t("registration_number")}</p>
        <p>{t("inn")}</p>
        <p>{t("company_director")}</p>
      </div>
    </div>
  );
};

export default About;
