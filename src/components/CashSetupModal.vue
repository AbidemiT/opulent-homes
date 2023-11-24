<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger
} from 'radix-vue'
import { Icon } from '@iconify/vue'

// defineProps({

// })
</script>

<template>
  <DialogRoot>
    <DialogTrigger class="card-btn no-bg right">
      <i class="-icon"></i>
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-30" />
      <DialogContent
        class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[650px] translate-x-[-50%] translate-y-[-50%] rounded-[20px] bg-white p-[30px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
      >
        <DialogTitle class="text-mauve12 m-0 text-[17px] font-semibold">
          Setup your cash account
        </DialogTitle>
        <DialogDescription class="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
          Add your bank account. Your bank account will be used for settlement when we process your
          transfer, withdrawal and pay-out transactions.
        </DialogDescription>

        <div class="flex justify-between">
          <fieldset class="mb-[15px] flex-1 pr-[10px] items-center gap-5">
            <label class="text-grass11 text-[15px] mb-[20px]" for="accountNumber">Account Number</label>
            <input
              id="accountNumber"
              class="text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              defaultValue="@peduarte"
            />
          </fieldset>
          <fieldset class="mb-[15px] flex-1 pl-[10px] items-center gap-5">
            <label class="text-grass11 text-[15px] mb-[20px]" for="chooseBank">Choose Bank</label>
            <input
              id="chooseBank"
              class="text-grass11 shadow-green7 focus:shadow-green8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              defaultValue="Pedro Duarte"
            />
          </fieldset>
        </div>
        <div class="mt-[25px] flex justify-end">
          <DialogClose as-child>
            <button
              class="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-semibold leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
            >
              Save changes
            </button>
          </DialogClose>
        </div>
        <DialogClose
          class="text-grass11 hover:bg-green4 focus:shadow-green7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
          aria-label="Close"
        >
          <Icon icon="lucide:x" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
