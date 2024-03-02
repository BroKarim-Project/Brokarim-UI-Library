import { Tabs, Tab } from '.';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

// const Template = (arguments_) => <Tab {...arguments_} />;

// export const Nomal = Template.bind({});

// Cerita untuk menampilkan Tabs
export const ExampleTabs = () => (
  <Tabs>
    <Tab label="Tab 1" tabName="Tab 1">
      <div className="w-full border-black border px-2 pb-10">Content for Tab 1</div>
    </Tab>

    <Tab label="Tab 2" tabName="Tab 2">
      <div className="w-full border-black border px-2 pb-10">Content for Tab 2</div>
    </Tab>
    <Tab label="Tab 3" tabName="Tab 3">
      <div className="w-full border-black border px-2 pb-10">Content for Tab 3</div>
    </Tab>
  </Tabs>
);
// Cerita untuk menampilkan Tabs
export const ExampleTabs2 = () => (
  <Tabs>
    <Tab label="Tab 1" tabName="Tab 1">
      <div>Content for Tab 1</div>
    </Tab>

    <Tab label="Tab 2" tabName="Tab 2">
      <div>Content for Tab 2</div>
    </Tab>
    <Tab label="Tab 3" tabName="Tab 3">
      <div>Content for Tab 3</div>
    </Tab>
  </Tabs>
);
