import Footer from "../components/Footer";

export default function Presence() {
  return (
    <div className=" w-11/12 lg:w-1/2 mx-auto 	">
      <h2 className="mt-8 mb-4">Profiles</h2>

      <ul>
        <li>
          Postdoctoral Research Fellow,{" "}
          <a
            href="https://www.ici-berlin.org/people/cayanan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ICI Berlin Institute for Cultural Inquiry
          </a>
        </li>
        <li>
          Assistant Professor,{" "}
          <a
            href="https://works.bepress.com/markanthony-cayanan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ateneo de Manila University
          </a>
        </li>
        {/* <li>
        A Conversation with Cyril Wong, <a href="http://queersoutheastasia.com/a-conversation-with-mark-anthony-cayanan-july-2021" target="_blank" rel="noopener noreferrer">Queer Southeast Asia</a>
    </li> */}
        <li>
          Author,{" "}
          <a
            href="https://giramondopublishing.com/authors/mark-anthony-cayanan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Giramondo Publishing
          </a>
        </li>
        <li>
          Writing Fellow, Art Omi in New York, USA (September 2023),{" "}
          <a
            href="https://artomi.org/art-omi-writers-2023-fall/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Art Omi
          </a>
        </li>
        <li>
          Writer in Residence, Villa Sarkia in Sysmä, Finland (2019),{" "}
          <a
            href="https://villasarkia.wordpress.com/2019/02/20/i-remember/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Villa Sarkia
          </a>
        </li>
        <li>
          Writing Fellow, Civitella Ranieri Foundation in Umbertide, Italy
          (2013),{" "}
          <a
            href="https://civitella.org/fellow/mark-cayanan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Civitella Ranieri Foundation
          </a>
        </li>
      </ul>

      <h2 className="mt-8 mb-4">Reviews and Write-ups</h2>
      <ul>
        <li>
          A Conversation with Cyril Wong,{" "}
          <a
            href="http://queersoutheastasia.com/a-conversation-with-mark-anthony-cayanan-july-2021"
            target="_blank"
            rel="noopener noreferrer"
          >
            Queer Southeast Asia
          </a>
        </li>

        <li>
        &quot;Spectacular Poems: &apos;The New Abandon&apos;&quot;, Kent Shaw, {" "}
          <a
            href="https://thekalliope.org/the-new-abandon-by-mark-anthony-cayanan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            the Kalliope
          </a>
        </li>

        <li>
        Review of <i>Unanimal, Counterfeit, Scurrilous</i>, James Antoniou,{" "}
          <a
            href="https://www.australianbookreview.com.au/abr-online/archive/2021/june-2021-no-432/964-june-2021-no-432/7814-james-antoniou-reviews-unanimal-counterfeit-scurrilous-by-mark-anthony-cayanan-errant-night-by-jerzy-beaumont-and-i-said-the-sea-was-folded-by-erik-jensen"
            target="_blank"
            rel="noopener noreferrer"
          >
            Australian Book Review
          </a>
        </li>

      </ul>

      <div className="mt-2">
        <div className="aspect-w-16 aspect-h-9 mb-32 mt-10">
          <div>
            <iframe
              src="https://player.vimeo.com/video/877878037"
              allow="autoplay; fullscreen"
              title="Embedded Vimeo Video"
              className="w-full h-full"
            ></iframe>
            <p className="mt-2">
              &quot;The Exophonic Lyric: A Poetics,&quot; talk at{" "}
              <i>Making and Breaking Models</i>, ICI Berlin
            </p>
          </div>
        </div>

        <div className="aspect-w-16 aspect-h-9 mb-32">
          <div>
            <iframe
              src="https://player.vimeo.com/video/846554272"
              allow="autoplay; fullscreen"
              title="Embedded Vimeo Video"
              className="w-full h-full"
            ></iframe>
            <p className="">
              Introduction to Maggie Nelson,{" "}
              <i>The Forms Things Want to Come As</i>, ICI Berlin
            </p>
          </div>
        </div>
        <div className="aspect-w-16 aspect-h-9 mb-32">
          <div>
            <iframe
              src="https://www.youtube.com/embed/ja33k7AOHAc"
              allow="autoplay; fullscreen"
              title="Embedded YT Video"
              className="w-full h-full"
            ></iframe>
            <p className="">
              &quot;Teaching Creative Writing: Poetry&quot; CLASS Lecture Series
            </p>
          </div>
        </div>

        <div className="aspect-w-16 aspect-h-9 mb-32">
          <div>
            <iframe
              src="https://www.youtube.com/embed/Sk9n5NP8Yv8?t=2564s"
              allow="autoplay; fullscreen"
              title="Embedded YT Video"
              className="w-full h-full"
            ></iframe>
            <p className="">
              Poetry Reading, A/PART:{" "}
              <i>An Anthology of Queer Southeast Asian Poetry</i>
            </p>
          </div>
        </div>
        <div className="aspect-w-16 aspect-h-9 mb-32">
          <div>
            <iframe
              src="https://www.youtube.com/embed/jLhBy47rcWU"
              allow="autoplay; fullscreen"
              title="Embedded YT Video"
              className="w-full h-full"
            ></iframe>
            <p className="">
              &quot;Ugly Feelings&quot;, Poetry Reading, <i>Metro Serye</i>
            </p>
          </div>
        </div>

        <div className="aspect-w-16 aspect-h-9 mb-12">
          <div>
            <iframe
              src="https://www.youtube.com/embed/8nDnX8p-mU8"
              allow="autoplay; fullscreen"
              title="Embedded YT Video"
              className="w-full h-full"
            ></iframe>
            <p className="">
              &quot;As Vivien as Blanche&quot;, Poetry Reading,{" "}
              <i>Metro Serye</i>
            </p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
}
