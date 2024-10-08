import type { Schema, Attribute } from '@strapi/strapi';

export interface WorkCardListItem extends Schema.Component {
  collectionName: 'components_work_card_list_items';
  info: {
    displayName: 'listItem';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface RegistrationRegistrationCard extends Schema.Component {
  collectionName: 'components_registration_registration_cards';
  info: {
    displayName: 'RegistrationCard';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    Description: Attribute.Text;
    BtnText: Attribute.String;
  };
}

export interface PreviousStoriesStoryCard extends Schema.Component {
  collectionName: 'components_previous_stories_story_cards';
  info: {
    displayName: 'StoryCard';
    description: '';
  };
  attributes: {
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    FundsRaised: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface PageElementWhyChoseTlf extends Schema.Component {
  collectionName: 'components_page_element_why_chose_tlves';
  info: {
    displayName: 'WhyChoseTLF';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Why Choose TLF Fundraising Solutions'>;
    FeatureCard: Attribute.Component<'page-element.feature-card', true>;
  };
}

export interface PageElementRecentBlog extends Schema.Component {
  collectionName: 'components_page_element_recent_blog_s';
  info: {
    displayName: 'RecentBlog ';
    description: '';
  };
  attributes: {
    RecentBlog: Attribute.String & Attribute.DefaultTo<'Recent Blog '>;
    MainImage: Attribute.Media<'images' | 'files'>;
    BlogStatus: Attribute.String & Attribute.DefaultTo<'FUNDRaising'>;
    TimeLimit: Attribute.String & Attribute.DefaultTo<'8 min read'>;
    BlogTitle: Attribute.String &
      Attribute.DefaultTo<'Online Fundraising Options in Canada: Exploring 50/50 and Chase the Ace'>;
    Description: Attribute.Text;
    BlogPost: Attribute.Component<'page-element.blog-post', true>;
    BtnText: Attribute.Component<'page-element.common-button'>;
  };
}

export interface PageElementQuestionsWrapper extends Schema.Component {
  collectionName: 'components_page_element_questions_wrappers';
  info: {
    displayName: 'QuestionsWrapper';
  };
  attributes: {
    Question: Attribute.Text;
    Answer: Attribute.Text;
  };
}

export interface PageElementProvinceGames extends Schema.Component {
  collectionName: 'components_page_element_province_games';
  info: {
    displayName: 'ProvinceGames';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Games Available In Your Province'>;
    Description: Attribute.Text;
    BtnText: Attribute.Component<'page-element.common-button', true>;
    regions: Attribute.Relation<
      'page-element.province-games',
      'oneToMany',
      'api::devision.devision'
    >;
  };
}

export interface PageElementMapEndPoints extends Schema.Component {
  collectionName: 'components_page_element_map_end_points';
  info: {
    displayName: 'MapEndPoints';
    description: '';
  };
  attributes: {
    Longitude: Attribute.Decimal;
    Latitude: Attribute.Decimal;
    LocationName: Attribute.String;
    games: Attribute.Relation<
      'page-element.map-end-points',
      'oneToMany',
      'api::game.game'
    >;
  };
}

export interface PageElementLotteryCard extends Schema.Component {
  collectionName: 'components_page_element_lottery_cards';
  info: {
    displayName: 'LotteryCard';
    description: '';
  };
  attributes: {
    CardImage: Attribute.Media<'images' | 'files'>;
    Title: Attribute.String;
    Description: Attribute.Text;
    ReadMore: Attribute.Component<'page-element.common-button'>;
  };
}

export interface PageElementLandingBannerr extends Schema.Component {
  collectionName: 'components_page_element_landing_bannerrs';
  info: {
    displayName: 'LandingBannerr';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Ready To Get Started'>;
    Description: Attribute.Text;
    BtnText: Attribute.Component<'page-element.common-button'>;
  };
}

export interface PageElementImagesWrapper extends Schema.Component {
  collectionName: 'components_page_element_images_wrappers';
  info: {
    displayName: 'ImagesWrapper';
  };
  attributes: {
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PageElementHowItWorks extends Schema.Component {
  collectionName: 'components_page_element_how_it_works';
  info: {
    displayName: 'HowItWorks';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'How It Works'>;
    Description: Attribute.Text;
    LotteryCard: Attribute.Component<'page-element.lottery-card', true>;
  };
}

export interface PageElementHomeHero extends Schema.Component {
  collectionName: 'components_page_element_home_heroes';
  info: {
    displayName: 'HomeHero';
    icon: 'apps';
    description: '';
  };
  attributes: {
    heroCard: Attribute.Component<'page-element.home-card', true>;
  };
}

export interface PageElementHomeCard extends Schema.Component {
  collectionName: 'components_page_element_home_cards';
  info: {
    displayName: 'HomeHeroSection';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    SubTitle: Attribute.Text;
    BannerImage: Attribute.Media<'images' | 'files'>;
    BtnText: Attribute.Component<'page-element.common-button'>;
  };
}

export interface PageElementHeader extends Schema.Component {
  collectionName: 'components_page_element_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    Logo: Attribute.Media<'images' | 'files'>;
    Link: Attribute.Component<'page-element.common-button', true>;
  };
}

export interface PageElementGetStartedBannerr extends Schema.Component {
  collectionName: 'components_page_element_get_started_bannerrs';
  info: {
    displayName: 'GetStartedBannerr';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Ready To Get Started'>;
    Description: Attribute.Text;
    BtnText: Attribute.Component<'page-element.common-button'>;
  };
}

export interface PageElementFooter extends Schema.Component {
  collectionName: 'components_page_element_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    Logo: Attribute.Media<'images' | 'files'>;
    FieldWrapper: Attribute.Component<'footer.field-wrapper', true>;
    CopyRight: Attribute.Component<'footer.copy-right'>;
  };
}

export interface PageElementFeatureCard extends Schema.Component {
  collectionName: 'components_page_element_feature_cards';
  info: {
    displayName: 'FeatureCard';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
    CardStatus: Attribute.String & Attribute.DefaultTo<'primary'>;
    Icon: Attribute.Media<'images' | 'files'>;
    GetStarted: Attribute.Component<'page-element.common-button'>;
  };
}

export interface PageElementFaq extends Schema.Component {
  collectionName: 'components_page_element_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'FAQ'>;
    Description: Attribute.Text &
      Attribute.DefaultTo<'The purpose of a FAQ is generally to provide information on frequent questions or concerns.  however, the format is a useful means of organizing information, and text'>;
    QuestionWrapper: Attribute.Component<
      'page-element.questions-wrapper',
      true
    >;
    BtnText: Attribute.Component<'page-element.common-button', true>;
  };
}

export interface PageElementContactUs extends Schema.Component {
  collectionName: 'components_page_element_contactuses';
  info: {
    displayName: 'ContactUs';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'CONTACT US'>;
    Heading: Attribute.String &
      Attribute.DefaultTo<'Have a Question ? Let\u2019s Get in Touch with us'>;
    DetailBox: Attribute.Component<'contact-us.detail-box', true>;
    ContactForm: Attribute.Component<'contact-us.contact-form'>;
    useLink: Attribute.Component<'contact-us.use-link', true>;
  };
}

export interface PageElementCommonButton extends Schema.Component {
  collectionName: 'components_page_element_common_buttons';
  info: {
    displayName: 'CommonButton';
    description: '';
  };
  attributes: {
    ButtonText: Attribute.String & Attribute.DefaultTo<'Get Started'>;
    Icon: Attribute.Media<'files' | 'images'>;
  };
}

export interface PageElementClientTestimonials extends Schema.Component {
  collectionName: 'components_page_element_client_testimonials';
  info: {
    displayName: 'ClientTestimonials';
    description: '';
  };
  attributes: {
    Description: Attribute.Text;
    YearsInIndustry: Attribute.Integer & Attribute.DefaultTo<14>;
    HappyClients: Attribute.Integer;
    RaisedFor: Attribute.Integer;
    CompniesImage: Attribute.Component<
      'client-testimonials.companies-review',
      true
    >;
    Logo: Attribute.Media<'images' | 'files'>;
  };
}

export interface PageElementClientReviews extends Schema.Component {
  collectionName: 'components_page_element_client_reviews';
  info: {
    displayName: 'ClientReviews';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'What our clients think about TLF services'>;
    ImagesWraapper: Attribute.Component<'page-element.images-wrapper', true>;
  };
}

export interface PageElementBlogPost extends Schema.Component {
  collectionName: 'components_page_element_blog_posts';
  info: {
    displayName: 'BlogPost';
  };
  attributes: {
    blogImage: Attribute.Media<'images' | 'files'>;
    BlogTime: Attribute.String & Attribute.DefaultTo<'8 min read'>;
    Description: Attribute.Text;
  };
}

export interface PageElementBannner extends Schema.Component {
  collectionName: 'components_page_element_bannners';
  info: {
    displayName: 'Bannner';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.DefaultTo<'Ready To Get Started'>;
    Description: Attribute.Text;
    SignupButton: Attribute.Component<'page-element.common-button'>;
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HowItWorksWorkCard extends Schema.Component {
  collectionName: 'components_how_it_works_work_cards';
  info: {
    displayName: 'WorkCard';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    subTitle: Attribute.String;
    listItem: Attribute.Component<'work-card.list-item', true>;
  };
}

export interface GamePriviousStories extends Schema.Component {
  collectionName: 'components_game_privious_stories';
  info: {
    displayName: 'PriviousStories';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    Description: Attribute.Text;
    YearsInIndustry: Attribute.String;
    HappyClients: Attribute.String;
    RaisedFor: Attribute.String;
    StoryCard: Attribute.Component<'previous-stories.story-card', true>;
  };
}

export interface GameOtherGames extends Schema.Component {
  collectionName: 'components_game_other_games';
  info: {
    displayName: 'OtherGames';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.DefaultTo<'Other Popular Games'>;
    games: Attribute.Relation<
      'game.other-games',
      'oneToMany',
      'api::game.game'
    >;
    BtnText: Attribute.Component<'page-element.common-button'>;
  };
}

export interface GameLotteryCard extends Schema.Component {
  collectionName: 'components_game_lottery_cards';
  info: {
    displayName: 'LotteryCard';
  };
  attributes: {
    title: Attribute.String;
    Description: Attribute.Text;
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GameHowItWorks extends Schema.Component {
  collectionName: 'components_game_how_it_works';
  info: {
    displayName: 'HowItWorks';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Description: Attribute.Text;
    BtnText: Attribute.Component<'page-element.common-button'>;
    img: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    WorkCard: Attribute.Component<'how-it-works.work-card', true>;
  };
}

export interface FooterFieldWrapper extends Schema.Component {
  collectionName: 'components_footer_field_wrappers';
  info: {
    displayName: 'FieldWrapper';
  };
  attributes: {
    FieldTitle: Attribute.String;
    ButtonText: Attribute.Component<'page-element.common-button', true>;
  };
}

export interface FooterCopyRight extends Schema.Component {
  collectionName: 'components_footer_copy_rights';
  info: {
    displayName: 'CopyRight';
  };
  attributes: {
    copyright: Attribute.String &
      Attribute.DefaultTo<'\u00A9 2023 TLF. All Rights Reserved.'>;
  };
}

export interface DevisionRegistration extends Schema.Component {
  collectionName: 'components_devision_registrations';
  info: {
    displayName: 'Registration';
  };
  attributes: {
    title: Attribute.String &
      Attribute.DefaultTo<'Get yourself registered in few steps'>;
    RegistrationCard: Attribute.Component<
      'registration.registration-card',
      true
    >;
  };
}

export interface DevisionPopularGames extends Schema.Component {
  collectionName: 'components_devision_popular_games';
  info: {
    displayName: 'PopularGames';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    Description: Attribute.Text;
    games: Attribute.Relation<
      'devision.popular-games',
      'oneToMany',
      'api::game.game'
    >;
  };
}

export interface ContactUsUseLink extends Schema.Component {
  collectionName: 'components_contact_us_use_links';
  info: {
    displayName: 'useLink';
  };
  attributes: {
    Link: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContactUsFormField extends Schema.Component {
  collectionName: 'components_contact_us_form_fields';
  info: {
    displayName: 'FormField';
  };
  attributes: {
    Label: Attribute.String;
    Placeholder: Attribute.String;
  };
}

export interface ContactUsDetailBox extends Schema.Component {
  collectionName: 'components_contact_us_detail_boxes';
  info: {
    displayName: 'DetailBox';
  };
  attributes: {
    FieldTitle: Attribute.String;
    FieldDetail: Attribute.Text;
    SubTitle: Attribute.String;
  };
}

export interface ContactUsContactForm extends Schema.Component {
  collectionName: 'components_contact_us_contact_forms';
  info: {
    displayName: 'ContactForm';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.DefaultTo<'Fill up the Form  and our team will get back to within 24 hrs'>;
    FormField: Attribute.Component<'contact-us.form-field', true>;
    SubmitBtn: Attribute.Component<'page-element.common-button'>;
  };
}

export interface ClientTestimonialsCompaniesReview extends Schema.Component {
  collectionName: 'components_client_testimonials_companies_reviews';
  info: {
    displayName: 'Companies Review';
  };
  attributes: {
    companyImage: Attribute.Media<'images' | 'files', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'work-card.list-item': WorkCardListItem;
      'registration.registration-card': RegistrationRegistrationCard;
      'previous-stories.story-card': PreviousStoriesStoryCard;
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
      'how-it-works.work-card': HowItWorksWorkCard;
      'game.privious-stories': GamePriviousStories;
      'game.other-games': GameOtherGames;
      'game.lottery-card': GameLotteryCard;
      'game.how-it-works': GameHowItWorks;
      'footer.field-wrapper': FooterFieldWrapper;
      'footer.copy-right': FooterCopyRight;
      'devision.registration': DevisionRegistration;
      'devision.popular-games': DevisionPopularGames;
      'contact-us.use-link': ContactUsUseLink;
      'contact-us.form-field': ContactUsFormField;
      'contact-us.detail-box': ContactUsDetailBox;
      'contact-us.contact-form': ContactUsContactForm;
      'client-testimonials.companies-review': ClientTestimonialsCompaniesReview;
    }
  }
}
