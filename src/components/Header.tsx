import DropDownMenu from './DropDownMenu';


export default function Header() {
  return (
    <div className='flex flex-row justify-between mt-2 pl-2 '>
      <div className='flex w-fit font-bold text-xl px-4 py-2 rounded-lg'>
        HeavenlyWeiner
      </div>
      <DropDownMenu />
    </div>
  );
}
