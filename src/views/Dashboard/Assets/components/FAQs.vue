<script setup lang="ts">
import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'radix-vue'
import { Icon } from '@iconify/vue'

const accordionItems = [
  {
    value: 'faq-1',
    title: 'Is this asset a free asset on the Abode platform?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: 'faq-2',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.',
  },
  {
    value: 'faq-3',
    title: 'Can it be animated?',
    content: 'Yes! You can use the transition prop to configure the animation.',
  },
  {
    value: 'faq-4',
    title: 'Is this asset a free asset on the Abode platform?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: 'faq-5',
    title: 'Lorem ipsum dolor sit amet, ?',
    content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.',
  },
  {
    value: 'faq-6',
    title: 'Can it be animated?',
    content: 'Yes! You can use the transition prop to configure the animation.',
  },
]
</script>

<template>
  <AccordionRoot
    class="accordion-root bg-mauve6 w-[700px] rounded-md"
    default-value="'item-1'"
    type="single"
    :collapsible="true"
  >
    <template v-for="item in accordionItems" :key="item.value">
      <AccordionItem class="accordion-item mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10" :value="item.value">
        <AccordionHeader class="flex accordion-header">
          <AccordionTrigger class="accordion-trigger text-grass11  shadow-mauve6 hover:bg-mauve2 flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none outline-none group">
            <span>{{ item.title }}</span>
            <Icon
              icon="radix-icons:chevron-down"
              class="text-green10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="accordion-content text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]">
          <div class=" py-4">
            {{ item.content }}
          </div>
        </AccordionContent>
      </AccordionItem>
    </template>
  </AccordionRoot>
</template>

<style scoped lang="scss">
.accordion-root {
    .accordion-item {
        .accordion-header {
            .accordion-trigger {
                font-weight: 700;
                border-bottom:  1px solid #D5E1EE;
                padding: 22px 0 28px 0;
                cursor: pointer;
            }
        }

        .accordion-content {

        }
    }
}
</style>