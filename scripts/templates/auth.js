export function createAuthModals() {
    return `
        <div id="login-modal" class="fixed inset-0 z-50 hidden">
            <div class="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" data-action="close-login"></div>
            <div class="relative min-h-full flex items-center justify-center p-4">
                <div class="glass-card w-full max-w-md rounded-[2rem] p-8 shadow-2xl">
                    <div class="flex items-start justify-between gap-4 mb-6">
                        <div>
                            <p class="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 mb-2">Customer Log In</p>
                            <h2 class="text-2xl font-display font-extrabold text-slate-900">Access SponsorSync</h2>
                            <p class="text-sm text-slate-500 mt-2">Use the example credentials to test the current prototype.</p>
                        </div>
                        <button data-action="close-login" class="rounded-xl bg-slate-100 p-2 text-slate-500 hover:text-slate-900 transition-colors">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>
                    <div class="space-y-4">
                        <div>
                            <label for="login-username" class="block text-sm font-bold text-slate-700 mb-2">Email or Username</label>
                            <input id="login-username" type="text" placeholder="Albertponfe" class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none">
                        </div>
                        <div>
                            <label for="login-password" class="block text-sm font-bold text-slate-700 mb-2">Password</label>
                            <input id="login-password" type="password" placeholder="123456" class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none">
                        </div>
                    </div>
                    <div class="mt-4 rounded-2xl bg-slate-50 border border-slate-200 p-4 text-xs text-slate-500">
                        Example login: <span class="font-bold text-slate-900">Albertponfe</span> / <span class="font-bold text-slate-900">123456</span>
                    </div>
                    <p id="login-error" class="mt-4 text-sm font-medium text-rose-600 hidden">Invalid username or password.</p>
                    <div class="mt-6 flex gap-3">
                        <button data-action="submit-login" class="flex-1 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-600 transition-all">Log In</button>
                        <button data-action="close-login" class="rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

        <div id="signup-modal" class="fixed inset-0 z-50 hidden">
            <div class="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" data-action="close-signup"></div>
            <div class="relative h-full overflow-y-auto">
                <div class="min-h-full flex items-start justify-center p-4 md:p-10">
                    <div class="glass-card w-full max-w-4xl rounded-[2rem] p-8 md:p-10 shadow-2xl mt-8 md:mt-12">
                        <div class="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                            <div>
                                <p class="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 mb-2">Sign Up</p>
                                <h2 class="text-3xl font-display font-extrabold text-slate-900">Create a SponsorSync account</h2>
                                <p class="text-sm text-slate-500 mt-2 max-w-2xl">Choose whether you are joining as a club or a sponsor, then complete the required information to set up your account.</p>
                            </div>
                            <button data-action="close-signup" class="rounded-xl bg-slate-100 p-2 text-slate-500 hover:text-slate-900 transition-colors self-start">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <button type="button" id="account-type-club" data-action="set-account-type" data-type="club" class="account-type-btn rounded-2xl border-2 border-indigo-600 bg-indigo-50 p-5 text-left transition-all">
                                <p class="text-sm font-bold text-slate-900">Club Account</p>
                                <p class="mt-2 text-sm text-slate-600">For teams, academies, and community clubs looking for sponsors and partnership tools.</p>
                            </button>
                            <button type="button" id="account-type-sponsor" data-action="set-account-type" data-type="sponsor" class="account-type-btn rounded-2xl border-2 border-transparent bg-slate-50 p-5 text-left transition-all">
                                <p class="text-sm font-bold text-slate-900">Sponsor Account</p>
                                <p class="mt-2 text-sm text-slate-600">For local businesses and brands that want to launch activations and measure results.</p>
                            </button>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                            ${createField('signup-org-name', 'Club or Company Name')}
                            ${createField('signup-contact-name', 'Primary Contact Name')}
                            ${createField('signup-email', 'Email Address', 'email')}
                            ${createField('signup-phone', 'Phone Number', 'tel')}
                            ${createField('signup-location', 'City / Region')}
                            ${createField('signup-password', 'Create Password', 'password')}
                            <div class="md:col-span-2">
                                <label for="signup-notes" class="block text-sm font-bold text-slate-700 mb-2">Tell us what you want from SponsorSync</label>
                                <textarea id="signup-notes" rows="4" class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Examples: find sponsors, manage proposals, launch matchday offers, track ROI."></textarea>
                            </div>
                        </div>

                        <p id="signup-error" class="mt-5 text-sm font-medium text-rose-600 hidden">Please complete all required fields before continuing.</p>

                        <div class="mt-8 flex flex-col sm:flex-row gap-3">
                            <button data-action="submit-signup" class="rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white hover:bg-indigo-600 transition-all">Create Account</button>
                            <button data-action="close-signup" class="rounded-xl border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function createField(id, label, type = 'text') {
    return `
        <div>
            <label for="${id}" class="block text-sm font-bold text-slate-700 mb-2">${label}</label>
            <input id="${id}" type="${type}" class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none">
        </div>
    `;
}
