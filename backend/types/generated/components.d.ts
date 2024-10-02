import type { Struct, Schema } from '@strapi/strapi';

export interface PageElementWhyChoseTlf extends Struct.ComponentSchema {
  collectionName: 'components_page_element_why_chose_tlves';
  info: {
    displayName: 'WhyChoseTLF';
  };
  attributes: {
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Why Choose TLF Fundraising Solutions'>;
    FeatureCard: Schema.Attribute.Component<'page-element.feature-card', true>;
  };
}

export interface PageElementRecentBlog extends Struct.ComponentSchema {
  collectionName: 'components_page_element_recent_blog_s';
  info: {
    displayName: 'RecentBlog ';
    description: '';
  };
  attributes: {
    RecentBlog: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Recent Blog '>;
    MainImage: Schema.Attribute.Media<'images' | 'files'>;
    BlogStatus: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'FUNDRaising'>;
    TimeLimit: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'8 min read'>;
    BlogTitle: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Online Fundraising Options in Canada: Exploring 50/50 and Chase the Ace'>;
    Description: Schema.Attribute.Text;
    BlogPost: Schema.Attribute.Component<'page-element.blog-post', true>;
    BtnText: Schema.Attribute.Component<'page-element.common-button', false>;
  };
}

export interface PageElementQuestionsWrapper extends Struct.ComponentSchema {
  collectionName: 'components_page_element_questions_wrappers';
  info: {
    displayName: 'QuestionsWrapper';
  };
  attributes: {
    Question: Schema.Attribute.Text;
    Answer: Schema.Attribute.Text;
  };
}

export interface PageElementProvinceGames extends Struct.ComponentSchema {
  collectionName: 'components_page_element_province_games';
  info: {
    displayName: 'ProvinceGames';
  };
  attributes: {
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Games Available In Your Province'>;
    Description: Schema.Attribute.Text;
    BtnText: Schema.Attribute.Component<'page-element.common-button', true>;
    MapEndPoints: Schema.Attribute.Component<
      'page-element.map-end-points',
      true
    >;
  };
}

export interface PageElementMapEndPoints extends Struct.ComponentSchema {
  collectionName: 'components_page_element_map_end_points';
  info: {
    displayName: 'MapEndPoints';
  };
  attributes: {
    Longitude: Schema.Attribute.Decimal;
    Latitude: Schema.Attribute.Decimal;
  };
}

export interface PageElementLotteryCard extends Struct.ComponentSchema {
  collectionName: 'components_page_element_lottery_cards';
  info: {
    displayName: 'LotteryCard';
    description: '';
  };
  attributes: {
    CardImage: Schema.Attribute.Media<'images' | 'files'>;
    Title: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    ReadMore: Schema.Attribute.Component<'page-element.common-button', false>;
  };
}

export interface PageElementLandingBannerr extends Struct.ComponentSchema {
  collectionName: 'components_page_element_landing_bannerrs';
  info: {
    displayName: 'LandingBannerr';
  };
  attributes: {
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Ready To Get Started'>;
    Description: Schema.Attribute.Text;
    BtnText: Schema.Attribute.Component<'page-element.common-button', false>;
  };
}

export interface PageElementImagesWrapper extends Struct.ComponentSchema {
  collectionName: 'components_page_element_images_wrappers';
  info: {
    displayName: 'ImagesWrapper';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PageElementHowItWorks extends Struct.ComponentSchema {
  collectionName: 'components_page_element_how_it_works';
  info: {
    displayName: 'HowItWorks';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'How It Works'>;
    Description: Schema.Attribute.Text;
    LotteryCard: Schema.Attribute.Component<'page-element.lottery-card', true>;
  };
}

export interface PageElementHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_page_element_home_heroes';
  info: {
    displayName: 'HomeHero';
    icon: 'apps';
    description: '';
  };
  attributes: {
    heroCard: Schema.Attribute.Component<'page-element.home-card', true>;
  };
}

export interface PageElementHomeCard extends Struct.ComponentSchema {
  collectionName: 'components_page_element_home_cards';
  info: {
    displayName: 'HomeHeroSection';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    SubTitle: Schema.Attribute.Text;
    BannerImage: Schema.Attribute.Media<'images' | 'files'>;
    BtnText: Schema.Attribute.Component<'page-element.common-button', false>;
  };
}

export interface PageElementHeader extends Struct.ComponentSchema {
  collectionName: 'components_page_element_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    Logo: Schema.Attribute.Media<'images' | 'files'>;
    Link: Schema.Attribute.Component<'page-element.common-button', true>;
  };
}

export interface PageElementGetStartedBannerr extends Struct.ComponentSchema {
  collectionName: 'components_page_element_get_started_bannerrs';
  info: {
    displayName: 'GetStartedBannerr';
  };
  attributes: {
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Ready To Get Started'>;
    Description: Schema.Attribute.Text;
    BtnText: Schema.Attribute.Component<'page-element.common-button', false>;
  };
}

export interface PageElementFooter extends Struct.ComponentSchema {
  collectionName: 'components_page_element_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    Logo: Schema.Attribute.Media<'images' | 'files'>;
    FieldWrapper: Schema.Attribute.Component<'footer.field-wrapper', true>;
    CopyRight: Schema.Attribute.Component<'footer.copy-right', false>;
  };
}

export interface PageElementFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_page_element_feature_cards';
  info: {
    displayName: 'FeatureCard';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.String;
    Description: Schema.Attribute.String;
    CardStatus: Schema.Attribute.String & Schema.Attribute.DefaultTo<'primary'>;
    Icon: Schema.Attribute.Media<'images' | 'files'>;
    GetStarted: Schema.Attribute.Component<'page-element.common-button', false>;
  };
}

export interface PageElementFaq extends Struct.ComponentSchema {
  collectionName: 'components_page_element_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'FAQ'>;
    Description: Schema.Attribute.Text;
    QuestionWrapper: Schema.Attribute.Component<
      'page-element.questions-wrapper',
      true
    >;
    BtnText: Schema.Attribute.Component<'page-element.common-button', true>;
  };
}

export interface PageElementContactUs extends Struct.ComponentSchema {
  collectionName: 'components_page_element_contactuses';
  info: {
    displayName: 'ContactUs';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'CONTACT US'>;
    Heading: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Have a Question ? Let\u2019s Get in Touch with us'>;
    DetailBox: Schema.Attribute.Component<'contact-us.detail-box', true>;
    ContactForm: Schema.Attribute.Component<'contact-us.contact-form', false>;
    useLink: Schema.Attribute.Component<'contact-us.use-link', true>;
  };
}

export interface PageElementCommonButton extends Struct.ComponentSchema {
  collectionName: 'components_page_element_common_buttons';
  info: {
    displayName: 'CommonButton';
    description: '';
  };
  attributes: {
    ButtonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Get Started'>;
    Icon: Schema.Attribute.Media<'files' | 'images'>;
  };
}

export interface PageElementClientTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_page_element_client_testimonials';
  info: {
    displayName: 'ClientTestimonials';
    description: '';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    YearsInIndustry: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<14>;
    HappyClients: Schema.Attribute.Integer;
    RaisedFor: Schema.Attribute.Integer;
    CompniesImage: Schema.Attribute.Component<
      'client-testimonials.companies-review',
      true
    >;
    Logo: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface PageElementClientReviews extends Struct.ComponentSchema {
  collectionName: 'components_page_element_client_reviews';
  info: {
    displayName: 'ClientReviews';
  };
  attributes: {
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'What our clients think about TLF services'>;
    ImagesWraapper: Schema.Attribute.Component<
      'page-element.images-wrapper',
      true
    >;
  };
}

export interface PageElementBlogPost extends Struct.ComponentSchema {
  collectionName: 'components_page_element_blog_posts';
  info: {
    displayName: 'BlogPost';
  };
  attributes: {
    blogImage: Schema.Attribute.Media<'images' | 'files'>;
    BlogTime: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'8 min read'>;
    Description: Schema.Attribute.Text;
  };
}

export interface PageElementBannner extends Struct.ComponentSchema {
  collectionName: 'components_page_element_bannners';
  info: {
    displayName: 'Bannner';
  };
  attributes: {
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Ready To Get Started'>;
    Description: Schema.Attribute.Text;
    SignupButton: Schema.Attribute.Component<
      'page-element.common-button',
      false
    >;
  };
}

export interface FooterFieldWrapper extends Struct.ComponentSchema {
  collectionName: 'components_footer_field_wrappers';
  info: {
    displayName: 'FieldWrapper';
  };
  attributes: {
    FieldTitle: Schema.Attribute.String;
    ButtonText: Schema.Attribute.Component<'page-element.common-button', true>;
  };
}

export interface FooterCopyRight extends Struct.ComponentSchema {
  collectionName: 'components_footer_copy_rights';
  info: {
    displayName: 'CopyRight';
  };
  attributes: {
    copyright: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u00A9 2023 TLF. All Rights Reserved.'>;
  };
}

export interface ContactUsUseLink extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_use_links';
  info: {
    displayName: 'useLink';
  };
  attributes: {
    Link: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContactUsFormField extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_form_fields';
  info: {
    displayName: 'FormField';
  };
  attributes: {
    Label: Schema.Attribute.String;
    Placeholder: Schema.Attribute.String;
  };
}

export interface ContactUsDetailBox extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_detail_boxes';
  info: {
    displayName: 'DetailBox';
  };
  attributes: {
    FieldTitle: Schema.Attribute.String;
    FieldDetail: Schema.Attribute.Text;
    SubTitle: Schema.Attribute.String;
  };
}

export interface ContactUsContactForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_contact_forms';
  info: {
    displayName: 'ContactForm';
  };
  attributes: {
    Title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Fill up the Form  and our team will get back to within 24 hrs'>;
    FormField: Schema.Attribute.Component<'contact-us.form-field', true>;
    SubmitBtn: Schema.Attribute.Component<'page-element.common-button', false>;
  };
}

export interface ClientTestimonialsCompaniesReview
  extends Struct.ComponentSchema {
  collectionName: 'components_client_testimonials_companies_reviews';
  info: {
    displayName: 'Companies Review';
  };
  attributes: {
    companyImage: Schema.Attribute.Media<'images' | 'files', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'page-element.why-chose-tlf': PageElementWhyChoseTlf;
      'page-element.recent-blog': PageElementRecentBlog;
      'page-element.questions-wrapper': PageElementQuestionsWrapper;
      'page-element.province-games': PageElementProvinceGames;
      'page-element.map-end-points': PageElementMapEndPoints;
      'page-element.lottery-card': PageElementLotteryCard;
      'page-element.landing-bannerr': PageElementLandingBannerr;
      'page-element.images-wrapper': PageElementImagesWrapper;
      'page-element.how-it-works': PageElementHowItWorks;
      'page-element.home-hero': PageElementHomeHero;
      'page-element.home-card': PageElementHomeCard;
      'page-element.header': PageElementHeader;
      'page-element.get-started-bannerr': PageElementGetStartedBannerr;
      'page-element.footer': PageElementFooter;
      'page-element.feature-card': PageElementFeatureCard;
      'page-element.faq': PageElementFaq;
      'page-element.contact-us': PageElementContactUs;
      'page-element.common-button': PageElementCommonButton;
      'page-element.client-testimonials': PageElementClientTestimonials;
      'page-element.client-reviews': PageElementClientReviews;
      'page-element.blog-post': PageElementBlogPost;
      'page-element.bannner': PageElementBannner;
      'footer.field-wrapper': FooterFieldWrapper;
      'footer.copy-right': FooterCopyRight;
      'contact-us.use-link': ContactUsUseLink;
      'contact-us.form-field': ContactUsFormField;
      'contact-us.detail-box': ContactUsDetailBox;
      'contact-us.contact-form': ContactUsContactForm;
      'client-testimonials.companies-review': ClientTestimonialsCompaniesReview;
    }
  }
}
