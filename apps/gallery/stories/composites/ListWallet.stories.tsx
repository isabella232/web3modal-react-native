import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ListWallet } from '@web3modal/ui-react-native';
import { tagOptions, walletImagesOptions, walletImageSrc } from '../../utils/PresetUtils';
import { GalleryContainer } from '../../components/GalleryContainer';

const meta: Meta<typeof ListWallet> = {
  component: ListWallet,
  argTypes: {
    name: {
      control: { type: 'text' }
    },
    imageSrc: {
      control: { type: 'text' }
    },
    walletImages: {
      control: { type: 'array' }
    },
    tagVariant: {
      options: [undefined, ...tagOptions],
      control: { type: 'select' }
    },
    tagLabel: {
      control: { type: 'text' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    showAllWallets: {
      control: { type: 'boolean' }
    }
  },
  args: {
    name: 'Rainbow',
    tagVariant: 'main',
    tagLabel: 'Recent',
    imageSrc: walletImageSrc,
    walletImages: walletImagesOptions,
    showAllWallets: false,
    disabled: false
  }
};

export default meta;
type Story = StoryObj<typeof ListWallet>;

export const Default: Story = {
  render: args => (
    <GalleryContainer width={300}>
      <ListWallet
        name={args.name}
        tagVariant={args.tagVariant}
        tagLabel={args.tagLabel}
        imageSrc={args.imageSrc}
        walletImages={args.walletImages}
        disabled={args.disabled}
        showAllWallets={args.showAllWallets}
      />
    </GalleryContainer>
  )
};
