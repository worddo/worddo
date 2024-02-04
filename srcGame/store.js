import { writable } from 'svelte/store'

export let gameInputWord = writable("hiiii")

export let searchDicTF = writable(false)
export let resultCheckWord = writable()

export let stepGame = writable('choice')

export let listresEnter = writable([]) // lưu các từ user nhập
export let TFlist = writable([])
export let changingUserAi =writable(false)

export let nofi = writable('') //notifi

export let onWhom = writable('ai')

