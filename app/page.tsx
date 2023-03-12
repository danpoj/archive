import { Accordion } from '@/components/Accordion'
import { Alert } from '@/components/Alert'
import { AspectRatio } from '@/components/AspectRatio'
import { Avatar } from '@/components/Avatar'
import {
  Checkbox,
  CheckboxDisabled,
  CheckboxWithText,
} from '@/components/CheckBox'
import { Collapsible } from '@/components/Collapsible'
import { Command } from '@/components/Command'
import { CommandCombobox } from '@/components/CommandCombobox'
import { CommandDialog } from '@/components/CommandDialog'
import { CommandPopover } from '@/components/CommandPopover'
import Container from '@/components/Container'
import { DropdownMenu, DropdownMenuRadioGroup } from '@/components/DropdownMenu'
import { HoverCard } from '@/components/HoverCard'
import { InlineCode } from '@/components/InlineCode'
import { List } from '@/components/List'
import {
  InputDefault,
  InputDisabled,
  InputWithButton,
  InputWithLabel,
  InputWithText,
} from '@/components/Input'
import Table from '@/components/Table'
import Blockquote from '@/components/ui/Blockquote'
import H1 from '@/components/ui/H1'
import H2 from '@/components/ui/H2'
import H3 from '@/components/ui/H3'
import H4 from '@/components/ui/H4'
import P from '@/components/ui/P'
import { Menubar } from '@/components/MenuBar'
import { Progress } from '@/components/Progress'
import { RadioGroup } from '@/components/RadioGroup'
import { ScrollArea, ScrollArea2 } from '@/components/ScrollArea'
import { Select } from '@/components/Select'
import { Dialog2 } from '@/components/Dialog2'
import { Silder } from '@/components/Slider'
import { Switch } from '@/components/Switch'
import { Tabs } from '@/components/Tabs'
import {
  TextareaDefault,
  TextareaDisabled,
  TextareaWithButton,
  TextareaWithLabel,
  TextareaWithText,
} from '@/components/TextArea'
import {
  ToggleDefault,
  ToggleDisabled,
  ToggleLg,
  ToggleOutline,
  ToggleSm,
  ToggleWithText,
} from '@/components/Toggle'
import {
  ToastDestructive,
  ToastSimple,
  ToastWithAction,
  ToastWithTitle,
} from '@/components/Toast'
import { Tooltip, Tooltip2 } from '@/components/Tooltip'

export default function Home() {
  return (
    <main className='p-4 flex flex-col items-center mb-40'>
      <Container title='text'>
        <H1>Hello, world! -H1</H1>
        <H2>Hello, world - H2</H2>
        <H3>Hello, world - H3</H3>
        <H4>Hello, world! -H4</H4>
        <P>Hello, world - P</P>
        <Blockquote>hello world! - Blockquote</Blockquote>
      </Container>
      <Container title='table'>
        <Table />
      </Container>
      <Container title='list'>
        <List />
      </Container>
      <Container title='inline code'>
        <InlineCode />
      </Container>
      <Container title='accordion'>
        <Accordion />
      </Container>
      <Container title='alert'>
        <Alert />
      </Container>
      <Container title='aspect ratio' className='w-full h-full'>
        <AspectRatio />
      </Container>
      <Container title='avatar'>
        <div className='flex gap-4'>
          <Avatar src='https://github.com/delbaoliveira.png' alt='@delba' />
          <Avatar src='https://github.com/danpoj.png' alt='@danpoj' />
          <Avatar src='https://github.com/shadcn.png' alt='@shadcn' />
        </div>
      </Container>
      <Container title='checkbox' className='flex flex-col gap-10'>
        <Checkbox />
        <CheckboxWithText />
        <CheckboxDisabled />
      </Container>
      <Container title='collapsible'>
        <Collapsible />
      </Container>
      <Container title='command'>
        <Command />
      </Container>
      <Container title='command dialog'>
        <CommandDialog />
      </Container>
      <Container title='dialog2'>
        <Dialog2 />
      </Container>
      <Container title='command combobox'>
        <CommandCombobox />
      </Container>
      <Container title='command popover'>
        <CommandPopover />
      </Container>
      <Container title='dropdown menu'>
        <DropdownMenu />
      </Container>
      <Container title='dropdown menu - radio'>
        <DropdownMenuRadioGroup />
      </Container>
      <Container title='hover card'>
        <HoverCard />
      </Container>

      <Container title='menubar'>
        <Menubar />
      </Container>

      <Container
        title='progress'
        className='w-full flex items-center justify-center'
      >
        <Progress />
      </Container>

      <Container title='radio group'>
        <RadioGroup />
      </Container>

      <Container title='input' className='flex flex-col gap-8'>
        <InputDefault />
        <InputDisabled />
        <InputWithButton />
        <InputWithLabel />
        <InputWithText />
      </Container>

      <Container title='scroll area'>
        <ScrollArea />
      </Container>

      <Container title='scroll area2'>
        <ScrollArea2 />
      </Container>

      <Container title='select'>
        <Select />
      </Container>

      <Container title='switch'>
        <Switch />
      </Container>

      <Container
        title='slider'
        className='w-full flex items-center justify-center'
      >
        <Silder />
      </Container>

      <Container title='tabs'>
        <Tabs />
      </Container>

      <Container title='textarea' className='flex flex-col gap-8'>
        <TextareaDefault />
        <TextareaDisabled />
        <TextareaWithButton />
        <TextareaWithLabel />
        <TextareaWithText />
      </Container>

      <Container title='toggle' className='flex gap-8'>
        <ToggleDefault />
        <ToggleDisabled />
        <ToggleLg />
        <ToggleOutline />
        <ToggleSm />
        <ToggleWithText />
      </Container>

      <Container title='toast' className='flex flex-col gap-8'>
        <ToastDestructive />
        <ToastSimple />
        <ToastWithAction />
        <ToastWithTitle />
      </Container>

      <Container title='tooltip' className='flex gap-10'>
        <Tooltip />
        <Tooltip2 />
      </Container>
    </main>
  )
}
