import { defineSlotRecipe } from "@chakra-ui/react"
import { stepsAnatomy } from "@chakra-ui/react/anatomy"

export const stepsSlotRecipe = defineSlotRecipe({
  slots: stepsAnatomy.keys(),
  // base: {
  //   indicator: {
  //     display: 'flex',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     flexShrink: '0',
  //     borderRadius: 'full',
  //     fontWeight: 'medium',
  //     width: 'var(--steps-size)',
  //     height: 'var(--steps-size)',
  //     _icon: {
  //       flexShrink: '0',
  //       width: 'var(--steps-icon-size)',
  //       height: 'var(--steps-icon-size)',
  //     },
  //   },
  //   item: {
  //     position: 'relative',
  //     display: 'flex',
  //     gap: '3',
  //     flex: '1 0 0',
  //     '&:last-of-type': {
  //       flex: 'initial',
  //       '& [data-part=separator]': {
  //         display: 'none',
  //       },
  //     },
  //   },
  //   trigger: {
  //     display: 'flex',
  //     alignItems: 'center',
  //     gap: '3',
  //     textAlign: 'start',
  //     focusVisibleRing: 'outside',
  //     borderRadius: 'l2',
  //   },
  //   content: {
  //     focusVisibleRing: 'outside',
  //   },
  // },

  variants: {
    variant: {
      rsi: {
        title: {
          fontSize: "md",
          color: "textColor",
          _current: {
            color: "red",
          },
        },
        separator: {
          bg: "white",
          _complete: {
            bg: "green.solid",
          },
        },
        indicator: {
          _incomplete: {
            borderWidth: "var(--steps-thickness)",
            borderColor: "white",
            bg: "white",
          },
          _current: {
            bg: "white",
            borderWidth: "var(--steps-thickness)",
            borderColor: "green.solid",
            fontWeight: "bold",
            color: "textColor",
          },
          _complete: {
            bg: "green.solid",
            borderColor: "green.solid",
            color: "green.contrast",
          },
        },
      },
    },
  },
})
