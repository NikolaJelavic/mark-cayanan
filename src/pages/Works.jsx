import Footer from "../components/Footer";

import { useEffect, useState } from 'react';

export default function Works() {

  const [showButton, setShowButton] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  };

  // Show/hide the "back to top" button based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="w-11/12 lg:w-1/2 mx-auto  h-fit ">
      <h2 className=" mb-4">Full-Length Poetry Books</h2>

      <div className="flex justify-between">

        <div className="m-1 md:w-56 md:p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105 hover:shadow-lg">
          <a
            href="https://giramondopublishing.com/books/unanimal-counterfeit-scurrilous/"
            target="_blank"
            rel="noopener noreferrer"
            className="block m-1"
          >
            <img
              // src="/mark-cayanan/img/unanimal.jpg"
              src="https://res.cloudinary.com/dvwnqprsp/image/upload/v1701123839/Mark-Cayanan/unanimal_skshp8.jpg"
              alt="unanimal"
              className="h-32 md:h-56 w-32 md:w-48 md:mb-4 rounded-lg transition-opacity"
            />
            <h5 className="mb-2 text-sm sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Unanimal, Counterfeit, Scurrilous.
            </h5>
            <h5 className="text-xs md:text-base">Giramondo Publishing, 2021.</h5>
          </a>
        </div>

        <div className="m-1 md:w-56 md:p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105 hover:shadow-lg">
          <a
            href="https://press.up.edu.ph/project/except-you-enthrall-me/"
            className="block m-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              // src="/mark-cayanan/img/enthrall.jpg"
              src="https://res.cloudinary.com/dvwnqprsp/image/upload/v1701123839/Mark-Cayanan/enthrall_bcsoxw.jpg"
              alt="enthrall"
              className="h-32 md:h-56 w-32 md:w-48 md:mb-4 rounded-lg transition-opacity"
            />
            <h5 className="mb-2 text-sm sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Except You Enthrall Me.
            </h5>
            <h5 className="text-xs md:text-base">
              University of the Philippines Press, 2013.
            </h5>
          </a>
        </div>

        <div className="m-1 md:w-56 md:p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105 hover:shadow-lg">
          <a
            href="https://curiouscouch.wordpress.com/2011/10/15/narcissusmark-anthony-cayanan/"
            target="_blank"
            rel="noopener noreferrer"
            className="block m-1"
          >
            <img
              // src="/mark-cayanan/img/narcissus.jpg"
              src="https://res.cloudinary.com/dvwnqprsp/image/upload/v1701123839/Mark-Cayanan/narcissus_dm3m4d.jpg"
              alt="narcissus"
              className="h-32 md:h-56 w-32 md:w-48 md:mb-4 rounded-lg transition-opacity"
            />
            <h5 className="mb-2 text-sm sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Narcissus.
            </h5>
            <h5 className="text-xs md:text-base">
              Ateneo de Manila University Press, 2011.
            </h5>
          </a>
        </div>
      </div>

      <h2 className=" mt-8 mb-4">Chapbooks</h2>
      <ul>
        <li>
          <i>Long Hunger.</i> Youth & Beauty Brigade, 2017.
        </li>
        <li>
          <i>Sentence.</i> Youth & Beauty Brigade, 2017.
        </li>
        <li>
          <i>Forfeit.</i> Youth & Beauty Brigade, 2015.
        </li>
        <li>
          <i>
            <a
              href="https://drive.google.com/file/d/1zvYqez5rsrio4mHDLkr1po_-rttBrME1/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shall We Be Kind and Suffer Each Other.
            </a>
          </i>{" "}
          High Chair, 2013.
        </li>
      </ul>

      <h2 className=" mt-8 mb-4">Textbook & Anthology</h2>
      <ul>
        <li>
          <i>Fine Lines: Writing Poetry, Fiction, and Drama.</i> Sibs Publishing
          House, 2016.
        </li>
        <li>
          <a
            href="https://journals.ateneo.edu/OJS/public/literary-supplement.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Kritika Kultura Anthology of New Philippine Writing in English
          </a>
          (2011), co-edited by Conchitina Cruz and Adam David
        </li>
      </ul>

      <h2 className=" mt-8 mb-4">
        Recent Publications in Anthologies, Journals, and Magazines
      </h2>
      <ul>
        <li>
          <a
            href="https://www.thecommononline.org/april-2023-poetry-feature/"
            target="_blank"
            rel="noopener noreferrer"
          >
            “Ecstasy Facsimile”{" "}
          </a>{" "}
          (These days I ask god) in <i>The Common Online</i>
        </li>
        <li>
          <a
            href="https://tldtd.org/poet/mark-anthony-cayanan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            “Foundation Day,” “Dramaticule: The Townsfolk,” and “A Wall of Trees
            Conceals Our Town from Another”
          </a>{" "}
          in <i>TLDTD</i>
        </li>
        <li>
          <a
            href="https://ajol.ateneo.edu/kk/articles/570/7411"
            target="_blank"
            rel="noopener noreferrer"
          >
            “Still Lifes with Fever”
          </a>{" "}
          in <i>Kritika Kultura</i>
        </li>
        <li>
          “Dramaticule: Faith Is Relentless Agreement” in <i>Indiana Review</i>
          {/* Add link */}
        </li>
        <li>
          <a
            href="https://sealitcircle.wixsite.com/pandanweekly/post/give-me-a-reason-to-abandon-everything-mark-anthony-cayanan"
            target="_blank"
            rel="noopener noreferrer"
          >
            “Give me a reason to abandon everything”
          </a>{" "}
          in <i>Pandan Weekly</i>
        </li>
        <li>
          <a
            href="https://fonografeditions.com/catalog/f0no15-fe-print-magazine/"
            target="_blank"
            rel="noopener noreferrer"
          >
            “The Wilderness Was the Time Between Prophets” and “The New Abandon”
          </a>{" "}
          in <i>FE, Fonograf Editions Magazine</i>
        </li>
        <li>
          <a
            href="https://www.australianpoetry.org/australian-poetry-journal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            “A Potted History of Fervour”
          </a>{" "}
          in <i>Australian Poetry Journal</i>
        </li>
        <li>
          <a
            href="https://journals.iium.edu.my/asiatic/index.php/ajell/article/view/2359"
            target="_blank"
            rel="noopener noreferrer"
          >
            “A Potted History of Fevers” (The just war was slow weather)
          </a>{" "}
          in <i>Asiatic: IIUM Journal of English Language and Literature</i>
        </li>
        <li>
          <a
            href="https://kenyonreview.org/kr-online-issue/2021-novdec/selections/mark-anthony-cayanan-763879/"
            target="_blank"
            rel="noopener noreferrer"
          >
            “A Study of Two Towns” and “Miracle Town, A Timeline of the 20th
            Century”
          </a>{" "}
          in <i>Kenyon Review Online</i>
        </li>
        <li>
          <a
            href="https://rabbitpoetry.com/shop/33-asia"
            target="_blank"
            rel="noopener noreferrer"
          >
            “Measurable Ardours”
          </a>{" "}
          in <i>Rabbit Poetry Journal</i>
        </li>
        <li>
          <a
            href="https://www.peripheriesjournal.com/_files/ugd/b277e5_901f9f75352f404d83b5de4b1b06365e.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            “A Potted History of Fevers” (Because we believed the prophet)
          </a>{" "}
          in <i>Peripheries: A Journal of Word and Image</i>
        </li>
        <li>
          <a
            href="https://www.pittstate.edu/info/midwestq/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            “Royal Encomienda”
          </a>{" "}
          in <i>The Midwest Quarterly: A Journal of Contemporary Thought</i>
        </li>
        <li>
          <a
            href="http://pinwheeljournal.com/poets/mark-anthony-cayanan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            “Essays on Transformation”
          </a>{" "}
          in <i>Pinwheel</i>
        </li>
        <li>
          <a
            href="https://seaqcf.net/program/a_part-anthology-queer-southeast-asian-poetry-pandemic?fbclid=IwAR0qMn3Uq8Y0iSoRPeuW28MDy3ZevnyK2OOjoLaZLTq_1HWdk9qNhmVNQg0"
            target="_blank"
            rel="noopener noreferrer"
          >
            “Occluded World”
          </a>{" "}
          in{" "}
          <i>
            A/PART: An Anthology of Queer Southeast Asian Poetry in the Pandemic
          </i>
        </li>
        <li>
          <a
            href="https://electricliterature.com/ode-to-boy-by-mark-anthony-cayanan/?fbclid=IwAR3FUkD2YEePTUzYy_o2qzHibZ_E_SZY6n_M2u15S3b65cHCga34uumuy1g"
            target="_blank"
            rel="noopener noreferrer"
          >
            “Ode to Boy”
          </a>{" "}
          in <i>The Commuter, Electric Literature</i>
        </li>
        <li>
          <a
            href="https://nightheronbarks.com/winter-2021/mark-anthony-cayanan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            “As Aschenbach” (It should’ve gone some other way)
          </a>{" "}
          in <i>The Night Heron Barks</i>
        </li>
        <li>
          <a
            href="https://www.lanaturnerjournal.com/category-s/140.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            “False Life”
          </a>{" "}
          in <i>Lana Turner: A Journal of Poetry & Opinion</i>
        </li>
        <li>
          <a
            href="https://socialalternatives.com/issue/critical-reflections/"
            target="_blank"
            rel="noopener noreferrer"
          >
            “No longer was he young and raw though the error remained young and
            raw” and “It’s you who are. What? / A hummingbird”
          </a>{" "}
          in <i>Social Alternatives</i>
        </li>
        <li>
          <a
            href="https://tomas.ust.edu.ph/wp-content/uploads/2021/07/Tomás-Volume-3-Issue-2-UST-CCWLS.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Poems from “Ecstasy Facsimile”
          </a>{" "}
          in{" "}
          <i>
            Tomás: The Journal of the UST Center for Creative Writing and
            Literary Studies
          </i>
        </li>
        <li>
          <a
            href="https://overland.org.au/previous-issues/poetry-in-lockdown/poetry-stillbirths-wrapped-in-newsprint/"
            target="_blank"
            rel="noopener noreferrer"
          >
            “Stillbirths Wrapped
          </a>{" "}
          in <i>Newsprint” in Overland</i>
        </li>
        <li>
          <a
            href="https://www.yespoetry.com/news/mark-anthony-cayanan-ive-built-a-house"
            target="_blank"
            rel="noopener noreferrer"
          >
            “Ben Ben Ben Ben Ben”
          </a>{" "}
          in <i>Yes Poetry</i>
        </li>
        <li>
          <a
            href="https://aaww.org/vigil/?fbclid=IwAR1ypyNT6DNbQdPhUtsMNNZWzItUAtHxWribcSEqbkJpZRDnma5S52iBgPU"
            target="_blank"
            rel="noopener noreferrer"
          >
            “Vigil”
          </a> {" "}
          in <i>The Margins</i>
        </li>
        <li>
          <a
            href="https://thefigureone.com/4a/cayanan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Two Poems from “Ecstasy Facsimile”
          </a>{" "}
          in <i>Figure 1</i> 
        </li>
        <li>
          <a
            href="https://www.eventmagazine.ca/product/event-483/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Poem from “Ecstasy Facsimile”
          </a>{" "}
          in <i>EVENT: Poetry and Prose</i>
        </li>
        <li>
          <a
            href="https://www.baestjournal.com/mark-anthony-cayanan"
            target="_blank"
            rel="noopener noreferrer"
          >
            “As Aschenbach” (There’s no knowing now),” “Aschenbach in Crisis,”
            and “Notes on Terror”
          </a>{" "} 
          in <i>Bæst</i>
        </li>
        <li>
          <a
            href="https://www.thehungerjournal.com/naiive-and-sentimental-mac"
            target="_blank"
            rel="noopener noreferrer"
          >
            “Naïve and Sentimental”
          </a>{" "}
          in <i>The Hunger</i>
        </li>
        <li>
          <a
            href="https://www.mascarareview.com/mark-anthony-cayanan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            “One Among”
          </a>{" "}
          in <i>Mascara Literary Review</i>
        </li>
        <li>
          <a
            href="http://cordite.org.au/poetry/notheme8/poems-from-i-look-at-my-body-and-see-the-source-of-my-shame-ecstasy-facsimile/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Two Poems from “I Look at My Body and See the Source of My Shame:
            Ecstasy Facsimile”
          </a>{" "}
          in <i>Cordite</i>
        </li>
        <li>
          <a
            href="https://dreginald.com/index.php/issues/issue-seventeen/mark-anthony-cayanan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Five Poems from “I Look at My Body and See the Source of My Shame:
            Ecstasy Facsimile”
          </a>{" "}
          in <i>Dreginald</i>
        </li>
        <li>
          <a
            href="https://thespectacle.wustl.edu/?p=1106"
            target="_blank"
            rel="noopener noreferrer"
          >
            “Self-Portraits with Tyrannical Consistency,” “The World
            Uncontrollably Slides into Bizarre and Grotesque Derangement,” and
            “Ode to the Exit Sign”
          </a>{" "}
          in <i>The Spectacle</i>
        </li>
        <li>
          <a
            href="https://issuu.com/craborchardreview/docs/crab_orchard_review_vol_24__no_1_ge_a4630ae869f3a7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Poem from “I Look at My Body and See the Source of My Shame: Ecstasy
            Facsimile”
          </a>{" "}
          in <i>Crab Orchard Review</i>
        </li>
        <li>
          <a
            href="https://journals.ateneo.edu/ojs/index.php/kk/article/view/3098/2919"
            target="_blank"
            rel="noopener noreferrer"
          >
            Four Poems from “I Look at My Body and See the Source of My Shame:
            Site Specific”
          </a>{" "}
          in <i>Kritika Kultura</i>
        </li>
        <li>
          <a
            href="https://foglifterjournal.com/product/foglifter-journal-volume-4-issue-1-e-book/"
            target="_blank"
            rel="noopener noreferrer"
          >
            “Motus Animi Continuus”
          </a>{" "}
          in <i>Foglifter</i>
        </li>
        <li>
          <a
            href="https://www.stiltsjournal.com/single-post/2018/12/10/A-history-of-western-looking-Mark-Anthony-Cayanan"
            target="_blank"
            rel="noopener noreferrer"
          >
            “A History of Western Looking”
          </a>{" "}
          in <i>Stilts</i>
        </li>
        <li>
          <a
            href="https://louisville.edu/miraclemonocle/issue-11/mark-anthony-cayanan"
            target="_blank"
            rel="noopener noreferrer"
          >
            Three Poems from “I Look at My Body and See the Source of My Shame:
            Ecstasy Facsimile”
          </a>{" "}
          in <i>Miracle Monocle</i>
        </li>
        <li>
          <a
            href="http://cordite.org.au/poetry/transqueer/i-look-at-my-body-and-see-the-source-of-my-shame-ecstasy-facsimile/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Poem from “I Look at My Body and See the Source of My Shame: Ecstasy
            Facsimile”
          </a>{" "}
          in <i>Cordite</i>
        </li>
        <li>
          <a
            href="http://www.rogueagentjournal.com/issue40"
            target="_blank"
            rel="noopener noreferrer"
          >
            Poems from “Sentence”
          </a>{" "}
          in <i>Rogue Agent</i>
        </li>
        <li>
          <a
            href="https://fac.flinders.edu.au/dspace/api/core/bitstreams/c7d1b1e6-2673-4fd6-b1f3-bc25bbd17f49/content"
            target="_blank"
            rel="noopener noreferrer"
          >
            Poems from “Sentence”
          </a>{" "}
          in <i>Transnational Literature</i>
        </li>
        <li>
          <a
            href="https://issuu.com/heights-ateneo/docs/lxii_no._3__online_version_"
            target="_blank"
            rel="noopener noreferrer"
          >
            Poems from “I Look at My Body and See the Source of My Shame”
          </a>{" "}
          in <i>Heights</i>
        </li>
        <li>
          <a
            href="http://www.versedaily.org/2013/asvivienasblanche.shtml"
            target="_blank"
            rel="noopener noreferrer"
          >
            “As Vivien as Blanche”
          </a>{" "}
          in <i>Copper Nickel</i> (reprinted by Verse Daily)
        </li>
        <li>
          <a
            href="https://www.asymptotejournal.com/special-feature/mark-anthony-cayanan-mission-statement/"
            target="_blank"
            rel="noopener noreferrer"
          >
            “Mission Statement”
          </a>{" "}
          in <i>Asymptote Journal</i>
        </li>
        <li>
          <a
            href="https://www.asiancha.com/content/view/1373/390/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Two Poems
          </a>{" "}
          in <i>Cha: An Asian Literary Journal</i>
        </li>
        <li>
          <a
            href="https://issuu.com/uidahodigital/docs/fugue44/6"
            target="_blank"
            rel="noopener noreferrer"
          >
            “As Rappaccini&apos;s Daughter”
          </a>{" "}
          in <i>Fugue</i>
        </li>
        <li>
          <a
            href="https://www.thecommononline.org/ecstasy-facsimile/"
            target="_blank"
            rel="noopener noreferrer"
          >
            “Ecstasy Facsimile” (Longing to nake his life)
          </a>{" "}
           in <i>The Common</i>
        </li>
        <li>
          <a
            href="https://glittertongue.wordpress.com/cayanan-fatal-error-has-occurred/"
            target="_blank"
            rel="noopener noreferrer"
          >
            “A Fatal Error Has Occurred” (He is listening to him explain)
          </a>{" "}
          in <i>glitter tongue</i>
        </li>
      </ul>
      <br />
      <br />
      <br />
      <br />

      <button
      id="backToTopBtn"
      className={`${
        showButton ? 'block' : 'hidden'
      } fixed bottom-16 md:bottom-24 right-4 md:right-10 h-12 w-12 bg-pink-400 text-darkgray border-none rounded-full cursor-pointer transition-opacity duration-300 hover:bg-darkgray hover:text-black`}
      onClick={scrollToTop}
    >
      &#8679; {/* Unicode for an arrow pointing upwards */}
    </button>
      <Footer />
    </div>
  );
}
