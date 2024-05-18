import { render, screen } from '@tests/testUtils';
import AboutView from '../AboutView.vue';

describe('AboutView.vue', () => {
    test('檢查載入組件', () => {
        render(AboutView);
        expect(screen.getByText('About')).toBeVisible();
    });
});
