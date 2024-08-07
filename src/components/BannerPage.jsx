import SearchBar from "./SearchBar";

const BannerPage = ({ setQuery }) => {
    return (
        <>
            <div className="banner-page">
                <h1 className="ms-3">Generative AI, <span>Transform Your Branding and Influencer Outreach</span></h1>
                <p>Discover your ideal influencers with our cutting-edge solution, designed to find the perfect match for your brand like never before.</p>
            </div>
            <SearchBar setQuery={setQuery}/>
        </>
    );

}
export default BannerPage;