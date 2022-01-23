import img1 from "../images/feature-icon-01.svg";
import img2 from "../images/feature-icon-02.svg";
import img3 from "../images/feature-icon-03.svg";
import img4 from "../images/feature-icon-04.svg";
import img5 from "../images/feature-icon-05.svg";
import img6 from "../images/feature-icon-06.svg";

const FeaturesComponent = () => {
  return (
    <section className="features section">
      <div className="container">
        <div className="features-inner section-inner has-bottom-divider">
          <div className="features-wrap">
            <div className="feature text-center is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src={img1} alt="Feature 01" />
                </div>
                <h4 className="feature-title mt-24">Be Productive</h4>
                <p className="text-sm mb-0">
                  Fermentum posuere urna nec tincidunt praesent semper feugiat
                  nibh. A arcu cursus vitae congue mauris. Nam at lectus urna
                  duis convallis. Mauris rhoncus aenean vel elit scelerisque
                  mauris.
                </p>
              </div>
            </div>
            <div className="feature text-center is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src={img2} alt="Feature 02" />
                </div>
                <h4 className="feature-title mt-24">Be Productive</h4>
                <p className="text-sm mb-0">
                  Fermentum posuere urna nec tincidunt praesent semper feugiat
                  nibh. A arcu cursus vitae congue mauris. Nam at lectus urna
                  duis convallis. Mauris rhoncus aenean vel elit scelerisque
                  mauris.
                </p>
              </div>
            </div>
            <div className="feature text-center is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src={img3} alt="Feature 03" />
                </div>
                <h4 className="feature-title mt-24">Be Productive</h4>
                <p className="text-sm mb-0">
                  Fermentum posuere urna nec tincidunt praesent semper feugiat
                  nibh. A arcu cursus vitae congue mauris. Nam at lectus urna
                  duis convallis. Mauris rhoncus aenean vel elit scelerisque
                  mauris.
                </p>
              </div>
            </div>
            <div className="feature text-center is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src={img4} alt="Feature 04" />
                </div>
                <h4 className="feature-title mt-24">Be Productive</h4>
                <p className="text-sm mb-0">
                  Fermentum posuere urna nec tincidunt praesent semper feugiat
                  nibh. A arcu cursus vitae congue mauris. Nam at lectus urna
                  duis convallis. Mauris rhoncus aenean vel elit scelerisque
                  mauris.
                </p>
              </div>
            </div>
            <div className="feature text-center is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src={img5} alt="Feature 05" />
                </div>
                <h4 className="feature-title mt-24">Be Productive</h4>
                <p className="text-sm mb-0">
                  Fermentum posuere urna nec tincidunt praesent semper feugiat
                  nibh. A arcu cursus vitae congue mauris. Nam at lectus urna
                  duis convallis. Mauris rhoncus aenean vel elit scelerisque
                  mauris.
                </p>
              </div>
            </div>
            <div className="feature text-center is-revealing">
              <div className="feature-inner">
                <div className="feature-icon">
                  <img src={img6} alt="Feature 06" />
                </div>
                <h4 className="feature-title mt-24">Be Productive</h4>
                <p className="text-sm mb-0">
                  Fermentum posuere urna nec tincidunt praesent semper feugiat
                  nibh. A arcu cursus vitae congue mauris. Nam at lectus urna
                  duis convallis. Mauris rhoncus aenean vel elit scelerisque
                  mauris.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesComponent;
