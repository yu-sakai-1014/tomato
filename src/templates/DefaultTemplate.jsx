import { BottomTemplate } from "../modecules/BottomTemplate";
import { HeaderTemplate } from "../modecules/HeaderTemplate";
import { MiddleTemplate } from "../modecules/MiddleTemplate";

export const DefaultTemplate = () => {
  return (
    <>
      <HeaderTemplate />
      <MiddleTemplate />
      <BottomTemplate />
    </>
  );
};
