import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <div className='text-lg md:text-[2rem] font-bold uppercase mt-2'>
      <span className='text-white'>And I&apos;m </span>
      <TypeAnimation
        sequence={[
            'Digital Marketer',
          1500,
            'Graphic Designer',
          1500,
          'Web Developer',
          1500,
          'UX/UI Designer',
          1500,
          'Frontend Developer',
          1500,
          'Programmer',
          1500,
          'Coder',
          1500,
        ]}
        speed={50}
        className='text-[#F3F33B]'
        repeat={Infinity}
      />
    </div>
  );
};

export default TextEffect;