import { createAppShell } from './templates/layout.js';

const VALID_USERNAME = 'Albertponfe';
const VALID_PASSWORD = '123456';

const state = {
    sidebarOpen: false,
    isLoggedIn: false,
    selectedAccountType: 'club'
};

const root = document.getElementById('app');
root.innerHTML = createAppShell();

document.addEventListener('click', handleClick);
window.addEventListener('resize', syncChatAreaForViewport);

updateAuthUI();
setAccountType('club');
syncChatAreaForViewport();

function handleClick(event) {
    const trigger = event.target.closest('[data-action]');
    if (!trigger) return;

    switch (trigger.dataset.action) {
        case 'toggle-sidebar':
            toggleSidebar();
            break;
        case 'navigate':
            navigate(trigger.dataset.view);
            break;
        case 'open-login':
            openLoginModal();
            break;
        case 'close-login':
            closeLoginModal();
            break;
        case 'open-signup':
            openSignupPage();
            break;
        case 'close-signup':
            closeSignupPage();
            break;
        case 'set-account-type':
            setAccountType(trigger.dataset.type);
            break;
        case 'submit-login':
            handleLogin();
            break;
        case 'submit-signup':
            handleSignup();
            break;
        case 'open-chat':
            openChat(trigger.dataset.name, trigger.dataset.icon);
            break;
        case 'close-chat':
            closeChat();
            break;
        case 'toast':
            showToast(trigger.dataset.message || 'Updated');
            break;
        default:
            break;
    }
}

function updateAuthUI() {
    const guest = document.getElementById('auth-guest');
    const user = document.getElementById('auth-user');

    if (state.isLoggedIn) {
        guest.classList.add('hidden');
        user.classList.remove('hidden');
        user.classList.add('flex');
    } else {
        guest.classList.remove('hidden');
        user.classList.add('hidden');
        user.classList.remove('flex');
    }
}

function openLoginModal() {
    document.getElementById('login-modal').classList.remove('hidden');
    document.getElementById('login-error').classList.add('hidden');
}

function closeLoginModal() {
    document.getElementById('login-modal').classList.add('hidden');
}

function openSignupPage() {
    document.getElementById('signup-modal').classList.remove('hidden');
    document.getElementById('signup-error').classList.add('hidden');
}

function closeSignupPage() {
    document.getElementById('signup-modal').classList.add('hidden');
}

function setAccountType(type) {
    state.selectedAccountType = type;
    const clubButton = document.getElementById('account-type-club');
    const sponsorButton = document.getElementById('account-type-sponsor');

    if (!clubButton || !sponsorButton) return;

    clubButton.className = 'account-type-btn rounded-2xl border-2 p-5 text-left transition-all';
    sponsorButton.className = 'account-type-btn rounded-2xl border-2 p-5 text-left transition-all';

    if (type === 'club') {
        clubButton.classList.add('border-indigo-600', 'bg-indigo-50');
        sponsorButton.classList.add('border-transparent', 'bg-slate-50');
    } else {
        sponsorButton.classList.add('border-indigo-600', 'bg-indigo-50');
        clubButton.classList.add('border-transparent', 'bg-slate-50');
    }
}

function handleLogin() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const error = document.getElementById('login-error');

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        state.isLoggedIn = true;
        updateAuthUI();
        closeLoginModal();
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';
        error.classList.add('hidden');
        showToast('Welcome back, Albertponfe');
        navigate('dashboard');
        return;
    }

    error.classList.remove('hidden');
}

function handleSignup() {
    const requiredIds = ['signup-org-name', 'signup-contact-name', 'signup-email', 'signup-phone', 'signup-location', 'signup-password'];
    const hasMissingField = requiredIds.some(id => !document.getElementById(id).value.trim());
    const error = document.getElementById('signup-error');

    if (hasMissingField) {
        error.classList.remove('hidden');
        return;
    }

    error.classList.add('hidden');
    closeSignupPage();
    showToast(`${state.selectedAccountType === 'club' ? 'Club' : 'Sponsor'} sign-up form captured`);
    navigate('home');
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    state.sidebarOpen = !state.sidebarOpen;

    if (state.sidebarOpen) {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.remove('opacity-0'), 10);
    } else {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('opacity-0');
        setTimeout(() => overlay.classList.add('hidden'), 300);
    }
}

function navigate(viewId) {
    document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

    document.getElementById(`view-${viewId}`).classList.add('active');
    const navItem = document.getElementById(`nav-${viewId}`);
    if (navItem) navItem.classList.add('active');

    if (state.sidebarOpen && window.innerWidth < 768) toggleSidebar();
    document.querySelector('main').scrollTop = 0;

    if (viewId !== 'messages') {
        closeChat();
    } else {
        syncChatAreaForViewport();
    }
}

function openChat(name, icon) {
    document.getElementById('chat-title').innerText = name;
    document.getElementById('chat-icon').innerText = icon;
    if (window.innerWidth < 768) document.getElementById('chat-area').classList.remove('translate-x-full');
}

function closeChat() {
    const chatArea = document.getElementById('chat-area');
    if (chatArea && window.innerWidth < 768) chatArea.classList.add('translate-x-full');
}

function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').textContent = message;
    toast.classList.remove('translate-y-[-100%]', 'opacity-0');
    setTimeout(() => toast.classList.add('translate-y-[-100%]', 'opacity-0'), 3000);
}

function syncChatAreaForViewport() {
    const chatArea = document.getElementById('chat-area');
    if (!chatArea) return;

    if (window.innerWidth >= 768) {
        chatArea.classList.remove('translate-x-full');
    } else {
        chatArea.classList.add('translate-x-full');
    }
}
