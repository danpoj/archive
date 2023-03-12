import { Slider as SliderAlias } from '@/components/ui/slider'

export const Silder = () => {
  return (
    <SliderAlias
      className='w-[300px]'
      defaultValue={[33]}
      max={100}
      step={10}
    />
  )
}
