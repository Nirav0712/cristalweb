import Image from "next/image";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import servicesData from "@/app/data/Service_data";
import Link from 'next/link';
import ServiceFaq from "./ServiceFaq";
import ContactForm from "./ContactForm";
import Card from "@/app/Components/Common/Card";

/* ---------------- TYPES ---------------- */

interface ServiceStep {
  title: string;
  text: string;
}

interface ServiceTrend {
  title: string;
  text: string;
}

interface ServiceFaqType {
  title: string;
  content: string;
}

interface ServiceWhatIs {
  title: string;
  text: string;
}

interface ServiceImportancePoint {
  title: string;
  text: string;
}

interface ServiceImportance {
  title: string;
  points: ServiceImportancePoint[];
}

interface ServiceData {
  title: string;
  heading?: string;
  description: string;
  image: string;
  secondaryImage?: string;
  components: string[];
  steps: ServiceStep[];
  faq?: ServiceFaqType[];
  whatIs?: ServiceWhatIs;
  trends?: { title: string; points: ServiceTrend[] };
  importance?: ServiceImportance;
  conclusion?: string;
}


interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

/* ---------------- PAGE ---------------- */

const ServicePage = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const service: ServiceData | undefined = servicesData[resolvedParams.slug];

  if (!service) {
    return (
      <div className="cs_height_120 cs_height_lg_80">
        <div className="container">
          <h2 className="text-center">Service Not Found</h2>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumb - Keep existing style */}
      <BreadCumb
        bgimg="/assets/img/page_header.jpg"
        Title={service.title}
      />

      <div className="cs_height_120 cs_height_lg_80"></div>

      {/* ================= HERO SECTION (Content + Form) ================= */}
      <div className="container">
        <div className="row cs_gap_y_40">

          {/* Main Content: Left Side */}
          <div className="col-lg-8">
            <div className="cs_service_details">

              {/* Title & Description */}
              <div className="cs_section_heading cs_style_1 cs_mb_40">
                <h2 className="cs_fs_36 cs_semibold cs_mb_20">{service.heading || service.title}</h2>
                <div className="cs_service_description">
                  <p className="cs_mb_30">{service.description}</p>
                  {/* Integrate What Is Section here for flow */}
                  {service.whatIs && (
                    <div className="cs_alert cs_style_1 cs_radius_10 cs_gray_bg_1 cs_p_30">
                      <h3 className="cs_fs_24 cs_semibold cs_mb_15">{service.whatIs.title}</h3>
                      <p className="mb-0">{service.whatIs.text}</p>
                    </div>
                  )}
                </div>
              </div>

              <Link href="/contact" className="cs_btn cs_style_1 cs_radius_5">
                <span>GET FREE QUOTE NOW</span>
                <i className="bi bi-arrow-right"></i>
              </Link>

            </div>
          </div>

          {/* Sidebar: Right Side Form */}
          <div className="col-lg-4">
            <div className="cs_sidebar_form_wrapper wow fadeInRight" style={{ position: 'sticky', top: '120px' }}>
              <ContactForm />
            </div>
          </div>

        </div>
      </div>

      <div className="cs_height_120 cs_height_lg_80"></div>

      {/* ================= PROCESS SECTION (Full Width) ================= */}
      <section className="cs_gray_bg_1">
        <div className="cs_height_110 cs_height_lg_70"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center cs_mb_60">
            <h3 className="cs_section_title cs_fs_36 cs_semibold mb-0">Agile Development Process</h3>
            <p className="cs_mt_15 mb-0">Our structured approach ensures smooth execution and delivery.</p>
          </div>

          <div className="row g-3">
            {service.steps.map((step, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="wow fadeInUp" data-wow-delay={`${index * 100}ms`}>
                  <Card
                    count={index + 1}
                    title={step.title}
                    description={step.text}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>

      {/* ================= OFFERED SERVICES / COMPONENTS ================= */}
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center cs_mb_60">
          <h3 className="cs_section_title cs_fs_36 cs_semibold mb-0">Our Offered Professional Services</h3>
        </div>
        <div className="row cs_gap_y_30 align-items-center">
          <div className="col-lg-6 wow fadeInLeft">
            <div className="cs_content_box">
              {/* We display the list of components here */}
              <ul className="cs_list cs_style_1 cs_type_1 cs_mp_0">
                {service.components.map((item, index) => (
                  <li key={index}>
                    <span className="cs_list_icon cs_center"><i className="bi bi-check-circle"></i></span>
                    <span className="cs_list_text cs_fs_18 cs_semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInRight">
            <div className="cs_image_box cs_radius_20 overflow-hidden">
              <Image src={service.secondaryImage || service.image} alt="Service Image" width={636} height={400} className="w-100 h-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= TRENDS & FAQ SECTION ================= */}
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_gap_y_40">
          {/* Trends */}
          <div className="col-lg-6">
            {service.trends && (
              <div className="cs_trends_wrapper">
                <h3 className="cs_fs_28 cs_semibold cs_mb_30">{service.trends.title}</h3>
                <div className="row cs_gap_y_20">
                  {service.trends.points.map((trend, index) => (
                    <div key={index} className="col-12">
                      <div className="cs_iconbox cs_style_1 cs_gray_bg_1 cs_radius_10 cs_p_20">
                        <h4 className="cs_fs_18 cs_semibold cs_mb_10">{trend.title}</h4>
                        <p className="cs_mb_0 cs_fs_14">{trend.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* FAQ */}
          <div className="col-lg-6">
            {service.faq && (
              <div className="cs_faq_wrapper">
                <h3 className="cs_fs_28 cs_semibold cs_mb_30">Frequently Asked Questions</h3>
                <ServiceFaq faqs={service.faq} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= CONCLUSION ================= */}
      {service.conclusion && (
        <div className="container mt-60">
          {/* <div className="cs_alert cs_style_1 cs_radius_20 cs_blue_bg cs_white_color cs_p_40 text-center">
            <h4 className="cs_white_color cs_fs_24 cs_mb_15">Final Thoughts</h4>
            <p className="cs_mb_0 cs_fs_18">{service.conclusion}</p>
          </div> */}
        </div>
      )}

      <div className="cs_height_120 cs_height_lg_80"></div>
    </>
  );
};

export default ServicePage;
