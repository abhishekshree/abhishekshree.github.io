---
title: About vim and building a basic .vimrc
date: '2021-03-01'
tags: ['vim', 'vimrc', 'bash', 'zsh', 'terminal']
draft: false
summary: This is a blog about vim and what a basic vimrc should contain, also a reminder for me on how I set up my .vimrc
images: [/static/images/vim.png]
---

## Why use vim ?

Apparently many people on the internet have already answered it but if you ask my opinion on using vim, it'll always be that using vim is an _acquired_ taste.

Using vim, specially on linux based systems is a massive boon in terms of productivity enhancement and I'll discuss how in this blog.

---

## Initial Steps &#8594;

- You need to leave the arrow keys NOW, the (h, j, k, l) system may seem intimidating in the beginning but it is amazing once you get used to it, again _acquired_ taste.
- Basic normal mode commands for searching, accessing terminal (yeah you don't need a plugin for that), or even closing vim xD should be learned.
- Once you spend a day without a custom .vimrc or default configurations, you'll get to know the importance of a .vimrc.

## Basic .vimrc setup

First things first, you put yout .vimrc in the home or ~/ where most of the other _dotfiles_ are. <br />

#### <u>Some UI changes</u>

```vim
syntax on
set virtualedit+=onemore
set noerrorbells
set signcolumn=yes
set noswapfile
set nobackup
set scrolloff=8
set tabstop=4 softtabstop=4
set shiftwidth=4
set expandtab
set nu rnu
set nowrap
set smartcase
set incsearch
set hidden
set wildmenu
set showmatch
set smarttab
set cindent
set novisualbell
set background=dark
set ruler
```

The major changes after adding these lines to your .vimrc and sourcing the changes (yes, do a normal mode command `:source %` for that) will be:

- You get line numbers ( which are regular in insert mode) and relative line numbers (sort of distance of a line from the current line you are at) in normal mode. Relative line numbering is REALLY helpful for navigation eg. `24j` from line 20 to go 24 lines down from line 20. You'll know the position basically (where to go).

- No swap files, no backup files, no jingles (they're pretty bad believe me).

- Tabstops in vim are weirdly set to 8 (sometimes 2) by default. So we fix the tabstops to 4 here.

- What this `set virtualedit+=onemore` does is really subtle but an amazing change, while selecting stuff in visual mode, normally you'll see that the last character from the file seem unselected all the time(but it is selected), so thing line fixes that bug (or so to say, 'gives an additional enhancement').

- Also that scrolloff makes the window scroll even when the cursor is 8 position above/below the bottom/top.
- There are some more syntax related or presentation related changes here, most of which are pretty obvious.
  <br />

#### <u>Plugins</u>

What I use for my plugins.

NOTE: The plugins need some customization after adding them to your environment, so be careful while writing this into your .vimrc

```vim

call plug#begin('~/.vim/plugged')

Plug 'honza/vim-snippets'
Plug 'ervandew/supertab'
Plug 'dense-analysis/ale'
Plug 'tpope/vim-fugitive'
Plug 'https://github.com/ycm-core/YouCompleteMe.git'
Plug 'preservim/nerdtree'
Plug 'preservim/nerdcommenter'
Plug 'sirver/ultisnips'
Plug 'vim-scripts/closetag.vim'
Plug 'alvan/vim-closetag'
Plug 'Valloric/MatchTagAlways'

" React
Plug 'pangloss/vim-javascript'
Plug 'leafgarland/typescript-vim'
Plug 'peitalin/vim-jsx-typescript'
Plug 'styled-components/vim-styled-components', { 'branch': 'main' }
Plug 'mattn/emmet-vim'
Plug 'mxw/vim-jsx'
Plug 'mlaursen/vim-react-snippets'

" Appearance
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'octol/vim-cpp-enhanced-highlight'
Plug 'ajh17/Spacegray.vim'

" Colorschemes
Plug 'tomasr/molokai'
Plug 'nanotech/jellybeans.vim'
Plug 'Pychimp/vim-luna'
Plug 'altercation/vim-colors-solarized'
call plug#end()

filetype plugin on

```

Very basic plugins but make life 100 times easier with vim.

- This has plugins for snippets (vim-snippets and ultisnips)
- Nerd tree and nerd commenter (found this one [here](https://pclub.in/tutorial/vim/2016/05/09/nerdcommenter.html) thanks to Yash Srivastav)
- Some for closing html tags and jsx tags, also tag matching.
- Plugins which work really well with react.
- YouCompleteMe for the autocompletes to work better. Also, I use ale for syntax check.
- Airline theme and monokai theme.
  <br />

#### <u>Theme based settings</u>

Found them on github. Works pretty amazing.

```vim

"colorscheme
set cot=menu,menuone
colorscheme jellybeans
let g:molokai_original = 1
set t_Co=256
set cursorline

" Airline customization
if !exists('g:airline_symbols')
  let g:airline_symbols = {}
  let g:airline_powerline_fonts = 1
endif
let g:airline_symbols.space = "\ua0"

set guifont=Literation\ Mono\ for\ Powerline\ 13

set laststatus=2
let g:airline#extensions#tabline#enabled = 1
let g:airline_theme='jellybeans'

```

<br />

#### <u>Some remaps to escape trouble</u>

```vim
let mapleader = " "

nnoremap <leader>n :NERDTreeToggle<CR>
nnoremap <leader>h :wincmd h<CR>
nnoremap <leader>j :wincmd j<CR>
nnoremap <leader>k :wincmd k<CR>
nnoremap <leader>l :wincmd l<CR>
imap qq <C-y>,
map gn :bn<cr>
map gp :bp<cr>
map gd :bd<cr>

" Nerd Commenter
nmap // <leader>c<space>
vmap // <leader>cs


" so you don't have to hold down shift to get into command mode
nnoremap ; :
nnoremap : ;
vnoremap ; :
vnoremap : ;

" Heaven
inoremap jk <Esc>

" Copy/Paste
vmap <Space>p "+p
vmap <Space>p "+P
nmap <Space>p "+p
nmap <Space>p "+P
vmap <Space>y "+yy
nmap <Space>y "+yy

```

Things to note:

- I have my leader mapped to the space button,that makes life a lot easier (because who even cares about \ ).
- Also for commands, use ; and not : because that shift key is hard to find xD.
- Nerd commenter and NerdTree toggle and navigation arout splits is changed for good.
- Also the copy paste keys have been unified as having 4 different places to copy in vim is kindof intimidating.

---

## Opinion on using vim

Just start using it today! There's no going back after that. Coming from vscode I can surely say that the flexibilty vim provides is unbeatable and is so amazing that you cannot live without a `dd` remap anytime you use some other editor.
Yeah I mean try it for yourself, tmux and vim make THE PERFECT PAIR I tell you. About that in some other blog :P

---

![vim](/static/images/vim.png)

<center> Here's my vim workflow for this project by the way.</center>
