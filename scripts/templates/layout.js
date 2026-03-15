import { createAuthModals } from './auth.js';
import { createViews } from './views.js';

export function createAppShell() {
    return `
        <div id="toast" class="fixed top-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-2xl transition-all duration-500 opacity-0 translate-y-[-100%] z-50 flex items-center space-x-3 border border-slate-700">
            <div class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
            <span id="toast-message" class="text-sm font-medium">Updating...</span>
        </div>

        <div id="sidebar-overlay" data-action="toggle-sidebar" class="fixed inset-0 bg-slate-900/50 z-30 hidden transition-opacity duration-300 md:hidden"></div>

        <aside id="sidebar" class="fixed inset-y-0 left-0 -translate-x-full md:relative md:translate-x-0 w-72 bg-white/95 backdrop-blur-xl border-r border-slate-200 flex flex-col justify-between z-40 transition-transform duration-300 ease-in-out">
            <div>
                <div class="h-16 flex items-center px-8 border-b border-slate-100 justify-between">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <span class="text-xl font-extrabold font-display italic">Sponsor<span class="text-indigo-600">Sync</span></span>
                    </div>
                    <button data-action="toggle-sidebar" class="md:hidden text-slate-400">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <nav class="mt-6 flex flex-col space-y-1 px-4">
                    ${createNavButton('home', 'Home', '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-8 9 8M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10"></path>', true)}
                    ${createNavButton('dashboard', 'Dashboard', '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13h6V5H4v8zm10 6h6V5h-6v14zM4 19h6v-2H4v2zm0-6h6v-2H4v2zm10 6h6v-2h-6v2z"></path>')}
                    ${createNavButton('discover', 'Discover Sponsors', '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>')}
                    ${createNavButton('proposals', 'Creative Proposals', '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6l4 2m6-2A10 10 0 1112 2a10 10 0 0110 10z"></path>')}
                    ${createNavButton('messages', 'Messages', '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>', false, '<span class="absolute right-4 bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">3</span>')}
                    ${createNavButton('profile', 'Media Kit', '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>')}
                </nav>
            </div>
            <div class="p-6">
                <div class="bg-slate-900 rounded-2xl p-4">
                    <div class="flex items-center">
                        <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold border border-indigo-400">WF</div>
                        <div class="ml-3">
                            <p class="text-xs font-bold text-white">Westside FC</p>
                            <p class="text-[10px] text-slate-400 uppercase tracking-widest">Amateur Club</p>
                        </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3 text-white">
                        <div><p class="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Reach</p><p class="mt-1 text-lg font-display font-extrabold">42k</p></div>
                        <div><p class="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Partners</p><p class="mt-1 text-lg font-display font-extrabold">6</p></div>
                    </div>
                </div>
            </div>
        </aside>

        <div class="md:hidden fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-20 flex justify-between items-center px-6 h-16">
            <button data-action="toggle-sidebar" class="text-slate-900"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button>
            <span class="font-extrabold font-display italic text-lg tracking-tight">Sponsor<span class="text-indigo-600">Sync</span></span>
            <button data-action="navigate" data-view="dashboard" class="text-indigo-600"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 13h6V5H4v8zm10 6h6V5h-6v14zM4 19h6v-2H4v2zm0-6h6v-2H4v2zm10 6h6v-2h-6v2z"></path></svg></button>
        </div>

        <div class="fixed top-5 right-4 md:top-6 md:right-8 z-20 flex items-center gap-3">
            <div id="auth-guest" class="flex items-center gap-3">
                <button data-action="open-login" class="rounded-xl border border-white/50 bg-white/80 px-4 py-2 text-sm font-bold text-slate-900 shadow-lg shadow-slate-900/10 backdrop-blur-sm hover:bg-white transition-all">Log In</button>
                <button data-action="open-signup" class="rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-slate-900/20 hover:bg-indigo-600 transition-all">Sign Up</button>
            </div>
            <div id="auth-user" class="hidden items-center gap-3">
                <div class="rounded-xl border border-white/50 bg-white/85 px-4 py-2 text-sm font-bold text-slate-900 shadow-lg shadow-slate-900/10 backdrop-blur-sm">Albertponfe</div>
                <button data-action="navigate" data-view="dashboard" class="rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-slate-900/20 hover:bg-indigo-600 transition-all">Dashboard</button>
            </div>
        </div>

        ${createAuthModals()}

        <main class="flex-1 overflow-y-auto mt-16 md:mt-0 relative w-full">
            <div class="max-w-7xl mx-auto p-6 lg:p-10">
                ${createViews()}
            </div>
        </main>
    `;
}

function createNavButton(view, label, pathMarkup, isActive = false, trailingMarkup = '') {
    return `
        <button data-action="navigate" data-view="${view}" id="nav-${view}" class="nav-item ${isActive ? 'active ' : ''}flex items-center px-4 py-3 text-sm font-bold text-slate-500 hover:text-indigo-600 rounded-xl transition-all w-full text-left relative">
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">${pathMarkup}</svg>
            ${label}
            ${trailingMarkup}
        </button>
    `;
}
