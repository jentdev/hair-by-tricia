import React, { useRef, useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const AboutModal = () => {

    const aboutRef = useRef(null);

    const [open, setOpen] = useState(false);

    const closeIcon = (
        <svg fill="currentColor" viewBox="0 0 20 20" width={28} height={28}>
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          ></path>
        </svg>
    );

  return (
    <>
        <div ref={aboutRef}></div>

        <button onClick={() => setOpen(true)}>about</button>

        <Modal
            open={open}
            onClose={() => setOpen(false)}
            centercontainer={aboutRef.current}
            classNames={{
                modal: 'modal-custom',                
            }}
            closeIcon={closeIcon}
        >
            <div>
            <p>this is paragraph one</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quos corrupti dignissimos fugit architecto laboriosam temporibus porro minima cupiditate ut, eos dolores modi ratione magnam. Quibusdam nihil quas hic quasi.
            Quibusdam quam inventore recusandae cupiditate quia voluptatum, numquam libero. Dicta, quos iusto quae blanditiis neque consequatur doloremque animi, pariatur, delectus veritatis laborum est. Odit ad error, fuga ipsa voluptatem magni?
            Ad sint cum repellendus ipsum, accusantium dolor aut voluptate omnis! Saepe suscipit, nemo quos odio, id deleniti architecto a iure harum quas error maiores nesciunt quidem quibusdam, velit maxime iste.
            Non rem tenetur aperiam hic ratione maiores, amet placeat quae voluptates fugit sed modi eius harum laudantium ullam? Eligendi, itaque dolore. Exercitationem enim nisi excepturi perspiciatis quis sequi delectus eligendi?</p>
            </div>
        </Modal>
    </>
  )
};

export default AboutModal;