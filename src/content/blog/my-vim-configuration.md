---
title: 'My vim configuration'
description: 'A basic configuration to make vim a useful editor for daily tasks'
pubDate: '2024-02-04'
cover: './assets/vim.png'
coverAlt: 'vim instance'
---

Let's start this blog with every developer's favorite topic: The vim configuration.

There are a lot of configurations out there, but I've tried to keep mine as slim and general-purpose as possible. Let's start with the `.vimrc` file:

```vim
syntax on

" Basic settings
set encoding=UTF-8
set nocompatible
set noswapfile
set nobackup
set nowritebackup
set termguicolors
set hidden
set nowrap
set number relativenumber
set showmatch
set cursorline
set cursorcolumn
set belloff=all
set timeoutlen=500
set mouse=a
set spelllang=en_us

" Tab settings
set smarttab
set smartindent
set expandtab
set tabstop=2 softtabstop=2
set shiftwidth=2

" Search settings
set hlsearch
set incsearch
set ignorecase
set smartcase

" Auto completion
set wildmenu
set wildmode=longest,list,full

" Fix splitting
set splitbelow splitright

" Remove trailing white space on save
autocmd BufWritePre * %s/\s\+$//e

" Plugins
call plug#begin()
  Plug 'mhinz/vim-startify'
  Plug 'catppuccin/vim', { 'as': 'catppuccin' }
  Plug 'lambdalisue/nerdfont.vim'
  Plug 'vim-airline/vim-airline'
  Plug 'freed-wu/airline-renderer-nerdfont.vim'
  Plug 'lambdalisue/fern.vim'
  Plug 'lambdalisue/fern-renderer-nerdfont.vim'
  Plug 'ctrlpvim/ctrlp.vim'
  Plug 'liuchengxu/vim-which-key'
  Plug 'editorconfig/editorconfig-vim'
  Plug 'ervandew/supertab'
  Plug 'tpope/vim-commentary'
call plug#end()

filetype plugin indent on
source ~/.vim/bindings.vim
source ~/.vim/settings.vim

" Color scheme
colorscheme catppuccin_mocha
```

I've defined some custom key bindings in the `.vim/bindings.vim` file:

```vim
" Standard bindings
nnoremap gl $
nnoremap gh 0
nnoremap gk H
nnoremap gj L
inoremap jk <Esc>

" Buffers
nnoremap bh :bprev<CR>
nnoremap bl :bnext<CR>
nnoremap bd :bd<CR>

" Splits
nnoremap ss <C-W>v
nnoremap sh <C-W>s

" Split navigation
map <C-h> <C-w>h
map <C-j> <C-w>j
map <C-k> <C-w>k
map <C-l> <C-w>l

" Alias replace all to S
nnoremap S :%s//gI<Left><Left><Left>

" which-key bindings
let g:which_key_map = {}

let g:which_key_map['w'] = {
      \ 'name' : '+windows',
      \ 'd' : ['<C-W>c', 'delete-window'],
      \ '-' : ['<C-W>s', 'split-window-below'],
      \ '|' : ['<C-W>v', 'split-window-right'],
      \ 'h' : ['<C-W>h', 'window-left'],
      \ 'j' : ['<C-W>j', 'window-below'],
      \ 'l' : ['<C-W>l', 'window-right'],
      \ 'k' : ['<C-W>k', 'window-up'],
      \ 'H' : ['<C-W>5<', 'expand-window-left'],
      \ 'J' : [':resize +5', 'expand-window-below'],
      \ 'L' : ['<C-W>5>', 'expand-window-right'],
      \ 'K' : [':resize -5', 'expand-window-up'],
      \ '=' : ['<C-W>=', 'balance-window'],
      \ }

let g:which_key_map['b'] = {
      \ 'name' : '+buffers',
      \ 'n' : [':enew', 'new buffer'],
      \ 'j' : [':bprev', 'move to previous buffer'],
      \ 'k' : [':bnext', 'move to next buffer'],
      \ 'd' : [':bd', 'close current buffer'],
      \ 'l' : [':CtrlPBuffer', 'list other buffers'],
      \ }

let g:which_key_map['t'] = {
      \ 'name' : '+toggles',
      \ 'l' : [':set nowrap!', 'Line Wrap'],
      \ 's' : [':set nospell!', 'Spell Check'],
      \ }

let g:which_key_map['p'] = {
      \ 'name' : '+CtrlP',
      \ 'b' : [':CtrlPBuffer', 'Buffers'],
      \ 'm' : [':CtrlPMixed', 'Mixed'],
      \ 's' : [':CtrlPMRU', 'MRU'],
      \ }

let g:which_key_map['f'] = [':Fern . -drawer -reveal=% -toggle -width=35', 'Fern']

```

... and finally the plugin configuration in the `.vim/settings.vim` file:

```vim
" Airline configuration
let g:airline_theme = 'catppuccin_mocha'
let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#tabline#fnamemod = ':t'


"Fern configuration
let g:fern#default_hidden = 1
let g:fern#renderer = 'nerdfont'


" CtrlP configuration
let g:ctrlp_custom_ignore = {
  \ 'dir':  '\v[\/](\.(git|hg|svn)|\_site)$',
  \ 'file': '\v\.(exe|so|dll|class|png|jpg|jpeg)$',
\}
let g:ctrlp_working_path_mode = 'r'


" WhichKey configuration
let g:which_key_use_floating_win = 0
let g:mapleader = "\<Space>"

autocmd! FileType which_key
autocmd FileType which_key set laststatus=0 noshowmode noruler
  \| autocmd BufLeave <buffer> set laststatus=2 noshowmode ruler

call which_key#register('<Space>', "g:which_key_map")
nnoremap <silent> <leader> :silent <c-u> :silent WhichKey '<Space>'<CR>
vnoremap <silent> <leader> :silent <c-u> :silent WhichKeyVisual '<Space>'<CR>
```
