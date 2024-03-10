import photoGreeting from '../../img/main.jpg';
import {
  BtnGetStarted,
  ChildImg,
  ContainerBenefits,
  ContainerGreeting,
  ContainerMain,
  DataFigures,
  IndividualContainerBenefits,
  MotivationalText,
  SmallTitleFirstTwo,
  SmallTitleSecondTwo,
  Title,
  TitleLanguage,
  HomePageContainer,
  WraperBox,
} from './HomePage.styled';

export default function HomePage() {
  return (
    <WraperBox>
      <HomePageContainer>
        <ContainerGreeting>
          <ContainerMain>
            <Title>
              Unlock your potential with the best{' '}
              <TitleLanguage>language</TitleLanguage> tutors
            </Title>
            <MotivationalText>
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </MotivationalText>
            <BtnGetStarted to="/teachers" title="Let's start !">
              Get started
            </BtnGetStarted>
          </ContainerMain>
          <div>
            <ChildImg src={photoGreeting} alt="mainChild" />
          </div>
        </ContainerGreeting>

        <ContainerBenefits>
          <IndividualContainerBenefits>
            <DataFigures>32,000 +</DataFigures>
            <SmallTitleFirstTwo> Experienced tutors</SmallTitleFirstTwo>
          </IndividualContainerBenefits>
          <IndividualContainerBenefits>
            <DataFigures>300,000 +</DataFigures>
            <SmallTitleFirstTwo> 5-star tutor reviews</SmallTitleFirstTwo>
          </IndividualContainerBenefits>
          <IndividualContainerBenefits>
            <DataFigures>120 +</DataFigures>
            <SmallTitleSecondTwo> Subjects taught</SmallTitleSecondTwo>
          </IndividualContainerBenefits>
          <IndividualContainerBenefits>
            <DataFigures>200 +</DataFigures>
            <SmallTitleSecondTwo> Tutor nationalities</SmallTitleSecondTwo>
          </IndividualContainerBenefits>
        </ContainerBenefits>
      </HomePageContainer>
    </WraperBox>
  );
}
