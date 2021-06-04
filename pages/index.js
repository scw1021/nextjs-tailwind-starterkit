import { useState } from "react";
import ContextMenu from "../components/context-menu";

export default function IndexPage() {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [selection, setSelection] = useState("");
  const [showContextMenu, setShowContextMenu] = useState(false);

  const handleMouseUp = e => {
    e.stopPropagation();
    e.preventDefault();
    const textSelection = window.getSelection().toString();
    if (textSelection) {
      if (selection !== textSelection) {
        setXPos(e.pageX);
        setYPos(e.pageY);
        setSelection(textSelection);
      }
      setShowContextMenu(true);
    } else {
      setShowContextMenu(false);
    }
  };

  return (
    <div className="container max-w-screen-lg mx-auto">
      <h1 className="mb-12 text-4xl font-bold">
        Hon. John B. Yep & Anor v. Hon. Christopher D. Samuel & ORS
      </h1>
      <div className="w-full mb-3">
        <span className="inline-block mr-6 text-sm text-gray-500">
          Nigeria Court of Appeals, Ninth Circuit.
        </span>
        <span className="inline-block mr-6 text-sm text-gray-500">
          Februrary th, 2016
        </span>
        <span className="inline-block mr-6 text-sm text-gray-500">
          629 F.3d 450 (5th Cir.2010) Cited 107 times
        </span>
      </div>
      <div className="mb-3">
        <a href="#">
          <span className="inline-block px-2 py-2 mr-2 bg-gray-300 rounded-xl">
            Motion to dismiss
          </span>
          <span className="inline-block px-2 py-2 mr-2 bg-gray-300 rounded-xl">
            IP - Copyright
          </span>
          <span className="inline-block px-2 py-2 mr-2 bg-gray-300 rounded-xl">
            IP - Patent
          </span>
          <span className="inline-block px-2 py-2 mr-2 bg-gray-300 rounded-xl">
            Consumer - Antitrust
          </span>
        </a>
      </div>
      <div className="mb-6">
        <a href="#">
          <span className="inline-block pl-2 mr-2 bg-gray-300 rounded-xl">
            671 F.3d 1113 (9th Cir.2012)
            <button className="px-3 py-2 ml-3 font-bold text-gray-200 bg-blue-700 hover:bg-blue-500 rounded-xl">
              Copy Citation
            </button>
          </span>
        </a>
      </div>
      <a href="#">
        <h5 className="mb-8 text-lg font-bold text-blue-500">
          Chidi N,Uwa, James S. Abiriyi, Abdullahi M. Bayero
        </h5>
      </a>
      <h4 className="mb-10 text-2xl font-bold text-gray-700">
        Hon. Christopher D. Samuel, Hon John B. Yep Anor<br></br>
        2012-02-07
      </h4>
      <h4 className="mb-8 text-2xl font-bold text-gray-700">Case Summary</h4>
      <p className="text-gray-500 text-md" onMouseUp={handleMouseUp}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        ullamcorper, felis eget fringilla imperdiet, urna tortor gravida tellus,
        vel iaculis arcu neque id tellus. Aenean ultricies dictum justo at
        tincidunt. Aliquam hendrerit dapibus neque, non sagittis odio. Cras a
        mollis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Proin pharetra vulputate sollicitudin. Aenean id mauris sit amet urna
        ultrices gravida. Praesent purus neque, sodales id metus at, condimentum
        cursus risus.
        <br></br>
        Praesent non augue sed ante malesuada viverra. Curabitur nec purus eu
        sem fermentum vestibulum faucibus eget lacus. Sed dictum eleifend nunc,
        a euismod lectus hendrerit id. Fusce quis nisl nec mi rutrum viverra.
        Aliquam a est a turpis hendrerit lobortis quis eu dui. Sed ut eleifend
        purus. Ut sed pulvinar tellus, a mollis mi. Duis ut fermentum leo, eget
        blandit neque. Donec maximus finibus dolor, sollicitudin viverra neque
        accumsan porttitor. In hac habitasse platea dictumst. Nunc faucibus
        posuere tortor, eget facilisis erat volutpat vel. Morbi laoreet metus
        libero, nec laoreet tortor facilisis at. Aenean euismod augue eu augue
        bibendum tincidunt.
        <br></br>
        Proin id nulla odio. Praesent pharetra accumsan semper. Fusce sagittis
        ornare magna, vitae interdum sem hendrerit ac. Morbi at risus nec lectus
        sagittis tempus quis a justo. Donec porttitor neque risus, in interdum
        nunc placerat at. Aliquam semper sodales dolor, vitae sollicitudin
        turpis cursus sit amet. Quisque dapibus maximus sapien, non tristique mi
        fermentum in. Proin ultrices ex eget sodales porttitor. Aenean nec
        luctus nulla.
        <br></br>
        Aliquam et fringilla mi, tincidunt posuere tortor. Proin quis ultrices
        nisi, eu rutrum orci. Maecenas porttitor nisi id magna consequat ornare.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Aenean pellentesque diam a scelerisque elementum.
        Praesent scelerisque dolor dui, sed blandit nibh scelerisque tincidunt.
        Fusce a metus feugiat, elementum ante eget, cursus nisi. Nulla interdum
        vehicula turpis non eleifend. Vivamus sagittis dui elit, sit amet
        vehicula libero faucibus sit amet. Curabitur id ipsum non lacus
        dignissim imperdiet id id erat. Donec in convallis risus. Suspendisse
        faucibus egestas congue. Aenean tempor posuere efficitur. Sed consequat
        tempor orci, in mollis nibh ultrices eu.
        <br></br>
        Vestibulum imperdiet mauris sed odio dapibus ullamcorper. Mauris
        pulvinar, tellus et aliquam suscipit, risus neque euismod urna, eget
        ornare libero felis et dui. Aenean non dolor ex. Vivamus egestas magna
        eu massa commodo, sed hendrerit elit convallis. Suspendisse consectetur
        tellus lobortis velit iaculis, sit amet dapibus nisl ullamcorper.
        Phasellus volutpat facilisis sem a consectetur. Aenean dapibus erat in
        enim volutpat egestas. Duis rhoncus sagittis lorem sed vulputate.
        Maecenas facilisis sodales gravida. Aliquam ut mauris sed nunc ultricies
        luctus in nec ipsum. Vivamus malesuada a nisi et cursus. Vestibulum
        tristique scelerisque sapien, quis sodales justo porttitor non. Proin
        rutrum lacus id risus placerat, id molestie quam iaculis. Morbi et sem
        at nibh elementum ullamcorper scelerisque a sapien. Donec vitae nulla
        convallis, feugiat tortor sed, congue erat.
      </p>
      <ContextMenu show={showContextMenu} x={xPos} y={yPos} />
    </div>
  );
}
