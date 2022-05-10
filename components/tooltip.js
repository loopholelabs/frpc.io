import * as React from "react";
import { useLayer, useHover, Arrow } from "react-laag";
import { motion, AnimatePresence } from "framer-motion";

export function Tooltip({ children, text, content }) {
  // We use `useHover()` to determine whether we should show the tooltip.
  // Notice how we're configuring a small delay on enter / leave.
  const [isOver, hoverProps] = useHover({ delayEnter: 50, delayLeave: 200 });

  // Tell `useLayer()` how we would like to position our tooltip
  const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
    isOpen: isOver,
    auto: true,
    possiblePlacements: [
      "top-center",
      "bottom-center",
      "right-center",
      "left-center",
    ],
    preferY: "top",
    preferX: "right",
    triggerOffset: 8, // small gap between wrapped content and the tooltip
  });

  // when children equals text (string | number), we need to wrap it in an
  // extra span-element in order to attach props
  let trigger;
  if (content) {
    trigger = (
      <span
        className="cursor-pointer decoration-dotted underline underline-offset-4"
        {...triggerProps}
        {...hoverProps}
      >
        {content}
      </span>
    );
  } else if (isReactText(children)) {
    trigger = (
      <span
        className="cursor-pointer border-b border-dotted"
        {...triggerProps}
        {...hoverProps}
      >
        {children}
      </span>
    );
  } else {
    // In case of an react-element, we need to clone it in order to attach our own props
    trigger = React.cloneElement(children, {
      ...triggerProps,
      ...hoverProps,
    });
  }

  // We're using framer-motion for our enter / exit animations.
  // This is why we need to wrap our actual tooltip inside `<AnimatePresence />`.
  // The only thing left is to describe which styles we would like to animate.
  return (
    <>
      {trigger}
      {renderLayer(
        <AnimatePresence>
          {isOver && (
            <motion.div
              className="bg-dark border border-white border-opacity-90 text-text-dark px-2 py-1 rounded-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.1 }}
              {...layerProps}
            >
              {text}
              <Arrow
                {...arrowProps}
                backgroundColor={"#171717"}
                borderWidth={1}
                borderColor={"rgba(255,255,255, 0.9)"}
                size={6}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}

function isReactText(children) {
  return ["string", "number"].includes(typeof children);
}
