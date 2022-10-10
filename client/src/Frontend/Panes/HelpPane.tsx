import React from 'react';
import styled from 'styled-components';
import { EmSpacer, Link, Padded, Section, SectionHeader } from '../Components/CoreUI';
import { White } from '../Components/Text';
import dfstyles from '../Styles/dfstyles';
import { useUIManager } from '../Utils/AppHooks';
import { ModalHook, ModalName, ModalPane } from '../Views/ModalPane';

const HelpContent = styled(Padded)`
  width: 500px;
  height: 500px;
  max-height: 500px;
  max-width: 500px;
  overflow-y: scroll;
  text-align: justify;
  color: ${dfstyles.colors.text};
`;

export function HelpPane({ hook }: { hook: ModalHook }) {
  return (
    <ModalPane hook={hook} title='Help' name={ModalName.Help}>
      <HelpContent>
        {useUIManager().isRoundOver() && (
          <Section>
            <SectionHeader>Alpha round Complete</SectionHeader>
            Blue forest alpha round is now complete. Please standby for the beta round soon.
             Also, Artifacts will no longer be mintable. Thanks for playing!
          </Section>
        )}

        

        <Section>
          <SectionHeader>Blue Forest</SectionHeader>
          Blue Forest is a vast universe, obfuscated by zero-knowledge cryptography. Your{' '}
          <White>explorer</White> (bottom left) explores the universe, searching for{' '}
          <White>Planets</White> and other players.
          <EmSpacer height={1} />
          All planets produce <White>Energy</White>. You can click-drag to move energy from planets
          you own to new planets to conquer them.
          <EmSpacer height={1} />
          Also scattered through the universe are <White>Asteroid Fields</White>, which produce{' '}
          <White>Silver</White>. Silver can be sent to planets and can be spent on{' '}
          <White>Upgrades</White>.
          <EmSpacer height={1} /> Some planets contain <White>Artifacts</White> - ERC721 tokens that
          can be traded with other players. Artifacts can be harvested and deposited onto planets,
          buffing their stats.
        </Section>

        <Section>
          <SectionHeader>Prizes and Scoring</SectionHeader>
          <EmSpacer height={1} />
          Scoring this round is made up of two parts: finding artifacts and withdrawing silver. Each
          time you find an artifact, your score increases by an amount that depends on the rarity of
          that artifact. Rarer artifacts are found on larger foundries, and increase your score
          more. You can also increase your score by withdrawing silver from the game. Each single
          silver you withdraw increases your score by one. You can only withdraw silver using space
          time rips.
        </Section>
      </HelpContent>
    </ModalPane>
  );
}
