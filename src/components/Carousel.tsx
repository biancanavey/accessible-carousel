import { ActionKind, usePony } from "pony-props";

export const Carousel = () => {
  const items = new Array(10).fill(null).map((_, idx) => ({
    id: idx,
    name: `item number ${idx}`,
  }));
  const {
    getSectionProps,
    getHeadingProps,
    getCarouselWrapperProps,
    getCarouselProps,
    getCarouselItemProps,
    getButtonProps,
    getAnnouncerProps,
    state,
  } = usePony({ numItems: items.length });

  return (
    <div {...getSectionProps()}>
      <h1 {...getHeadingProps()}>Heading</h1>
      <div {...getCarouselWrapperProps()}>
        <ul {...getCarouselProps()}>
          {items.map((item, idx) => (
            <li key={idx} {...getCarouselItemProps(idx)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <button {...getButtonProps(ActionKind.Previous)}>Previous</button>
      <button {...getButtonProps(ActionKind.Next)}>Next</button>
      <div {...getAnnouncerProps()}>
        <p>{`Item ${state.activeSlideIndex + 1} of ${items.length}`}</p>
      </div>
    </div>
  );
};
