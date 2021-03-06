import Modal from 'react-modal';
import '../../assets/styles/dragonDetails.scss';
import { DragonCard } from '../../components/DragonCard';
import { Header } from '../../components/Header';

Modal.setAppElement('#root');

export function DragonDetails() {
    return (
        <>
            <Header />
            <main id="main-dragon-details">
                <h1>Informações sobre o dragão:</h1>
                <DragonCard />
            </main>
        </>
    );
}