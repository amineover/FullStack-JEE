-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 14 oct. 2020 à 16:46
-- Version du serveur :  10.4.14-MariaDB
-- Version de PHP : 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `paie`
--

-- --------------------------------------------------------

--
-- Structure de la table `demande`
--

CREATE TABLE `demande` (
  `id` bigint(20) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `datedebut` varchar(100) DEFAULT NULL,
  `datefin` varchar(100) DEFAULT NULL,
  `etat` bit(1) NOT NULL,
  `situation_demande` varchar(250) NOT NULL,
  `type_demande_id` bigint(20) DEFAULT NULL,
  `salarier` int(11) NOT NULL,
  `salarier_id` bigint(20) DEFAULT NULL,
  `motifrejet` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `demande`
--

INSERT INTO `demande` (`id`, `code`, `datedebut`, `datefin`, `etat`, `situation_demande`, `type_demande_id`, `salarier`, `salarier_id`, `motifrejet`) VALUES
(80, '4', '10-10-2020', '20-11-2020', b'0', 'rejeté', 48, 9, NULL, 'annulation'),
(82, '2', '10-11-2020', '20-11-2020', b'0', 'validé', 47, 9, NULL, ''),
(83, '2', '10-11-2020', '20-11-2020', b'0', 'validé', 1, 1, NULL, ''),
(121, '20', '2020-10-10', '2020-10-24', b'0', 'en attente', 47, 9, NULL, NULL),
(124, '20', '2020-10-02', '2020-10-16', b'0', 'validé', 1, 122, NULL, ''),
(126, '20', '2020-09-29', '2020-10-01', b'0', 'rejeté', 85, 9, NULL, 'motif test');

-- --------------------------------------------------------

--
-- Structure de la table `diplome`
--

CREATE TABLE `diplome` (
  `id` bigint(20) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `diplome` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `diplome`
--

INSERT INTO `diplome` (`id`, `code`, `diplome`) VALUES
(17, '1', 'tsdi'),
(31, '2', 'licence'),
(32, '3', 'master');

-- --------------------------------------------------------

--
-- Structure de la table `fonction`
--

CREATE TABLE `fonction` (
  `id` bigint(20) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `fonction` varchar(255) DEFAULT NULL,
  `salarier_id` bigint(20) DEFAULT NULL,
  `salarier` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `fonction`
--

INSERT INTO `fonction` (`id`, `code`, `fonction`, `salarier_id`, `salarier`) VALUES
(1, '1', 'chef projet', 30, 15),
(25, '2', 'ado', 15, 9),
(27, '2', 'chef projets', 1, 1),
(29, '4', 'chef projet', 9, 90),
(33, '10', 'directeur', 9, 122);

-- --------------------------------------------------------

--
-- Structure de la table `formation`
--

CREATE TABLE `formation` (
  `id` bigint(20) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `formation` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `formation`
--

INSERT INTO `formation` (`id`, `code`, `formation`) VALUES
(19, '1', 'GAPPS CERT'),
(34, '2', 'TSSI'),
(35, '3', 'PMP');

-- --------------------------------------------------------

--
-- Structure de la table `grade`
--

CREATE TABLE `grade` (
  `id` bigint(20) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `grade` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `grade`
--

INSERT INTO `grade` (`id`, `code`, `grade`) VALUES
(21, '1', 'GR échèle 10'),
(36, '2', 'GR échèle 11'),
(37, '3', 'GR échèle 9');

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(134),
(134),
(134),
(134),
(134),
(134),
(134),
(134),
(134),
(134),
(134);

-- --------------------------------------------------------

--
-- Structure de la table `indisponibilite`
--

CREATE TABLE `indisponibilite` (
  `id` bigint(20) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `date_debut` varchar(100) DEFAULT NULL,
  `date_fin` varchar(100) DEFAULT NULL,
  `salarier_id` bigint(20) DEFAULT NULL,
  `salarier` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `indisponibilite`
--

INSERT INTO `indisponibilite` (`id`, `code`, `date_debut`, `date_fin`, `salarier_id`, `salarier`) VALUES
(39, '1', '2020-10-02', '2020-10-22', NULL, 0),
(40, '2', '2020-10-01', '2020-10-24', NULL, 0),
(89, '3', '2020-10-23', '2020-10-15', 9, 0),
(127, '82', '10-11-2020', '20-11-2020', NULL, 9),
(130, '124', '2020-10-02', '2020-10-16', NULL, 122);

-- --------------------------------------------------------

--
-- Structure de la table `salarier`
--

CREATE TABLE `salarier` (
  `id` bigint(20) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `tarif` double NOT NULL,
  `salarier_id` bigint(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT 'salarie',
  `salarier` bigint(20) DEFAULT NULL,
  `grade` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `salarier`
--

INSERT INTO `salarier` (`id`, `nom`, `prenom`, `code`, `tarif`, `salarier_id`, `email`, `password`, `role`, `salarier`, `grade`) VALUES
(1, 'hakam', 'samir', '100', 200, NULL, 'hakam@gmail.com', 'hakam', 'salarie', NULL, 0),
(9, 'lazrak', 'mohammed', '20', 200, NULL, 'lazrak', 'lazrak', 'salarie', NULL, 0),
(15, 'simo', 'karimi', '30', 200, NULL, 'simo@gmail.com', 'simo', 'salarie', NULL, 0),
(90, 'admin', 'admin', '111', 200, NULL, 'admin', 'admin', 'admin', NULL, 0),
(122, 'khawa', 'yassin', 'cd201456', 200, NULL, 'khawa@gmail.com', '00000000', 'salarie', NULL, 0),
(123, 'lazrak', 'amin', 'cd520214', 200, NULL, 'lazrak@gmail.com', '000000', 'salarie', NULL, 0);

-- --------------------------------------------------------

--
-- Structure de la table `salarier_diplome`
--

CREATE TABLE `salarier_diplome` (
  `id` bigint(20) NOT NULL,
  `date_obtention` varchar(100) DEFAULT NULL,
  `diplome_id` bigint(20) DEFAULT NULL,
  `salarier` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `salarier_diplome`
--

INSERT INTO `salarier_diplome` (`id`, `date_obtention`, `diplome_id`, `salarier`) VALUES
(113, '2020-10-24', 17, 1),
(114, '2020-10-30', 31, 9),
(116, '2020-10-24', 32, 15),
(117, '2020-10-25', 31, 9);

-- --------------------------------------------------------

--
-- Structure de la table `salarier_formation`
--

CREATE TABLE `salarier_formation` (
  `id` bigint(20) NOT NULL,
  `date_debut_formation` varchar(100) DEFAULT NULL,
  `date_fin_formation` varchar(100) DEFAULT NULL,
  `description_formation` varchar(255) DEFAULT NULL,
  `formation_id` bigint(20) DEFAULT NULL,
  `salarier` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `salarier_formation`
--

INSERT INTO `salarier_formation` (`id`, `date_debut_formation`, `date_fin_formation`, `description_formation`, `formation_id`, `salarier`) VALUES
(119, '2020-08-07', '2020-10-31', 'description 1', 34, 9),
(87, '2020-10-28', '2020-10-31', 'description 2', 34, 1),
(43, '2020-10-14', '2020-10-31', 'description 3', 35, 15),
(118, '2020-10-25', '2020-10-31', 'description 2', 34, 9);

-- --------------------------------------------------------

--
-- Structure de la table `situation_demande`
--

CREATE TABLE `situation_demande` (
  `id` bigint(20) NOT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `date_etat` varchar(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `situation_demande`
--

INSERT INTO `situation_demande` (`id`, `etat`, `code`, `date_etat`) VALUES
(1, 'en cour', '1', '10-10-2020'),
(50, 'en cour', '1', '10-10-2020'),
(51, '1', '1', '10-10-2020'),
(52, '1', '1', '10-10-2020'),
(53, 'validé', '1', '10-10-2020'),
(54, 'en cour de signature', '1', '10-10-2020'),
(55, 'en cour de signature', '1', '10-10-2020'),
(56, 'en cour de signature', '1', '10-10-2020'),
(57, 'en cour de signature', '1', '10-10-2020'),
(58, 'en cour de signature', '1', '10-10-2020'),
(60, 'en cour de signature', '1', '10-10-2020'),
(61, 'en cour de signature', '1', '10-10-2020'),
(62, 'en cour de signature', '1', '10-10-2020'),
(63, 'validé', '1', '10-10-2020'),
(64, 'en cour de signature', '1', '10-10-2020'),
(65, 'validé', '1', '10-10-2020'),
(66, 'en attente', '1', '10-10-2020'),
(67, 'validé', '1', '10-10-2020'),
(68, 'en cour de signature', '1', '10-10-2020'),
(69, 'en cour de signature', '1', '10-10-2020'),
(70, 'en cour de signature', '1', '10-10-2020'),
(71, 'validé', '1', '10-10-2020'),
(75, 'en cour de signature', '1', '10-10-2020'),
(78, 'en cour de signature', '1', '10-10-2020');

-- --------------------------------------------------------

--
-- Structure de la table `type_demande`
--

CREATE TABLE `type_demande` (
  `id` bigint(20) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `type_demande`
--

INSERT INTO `type_demande` (`id`, `code`, `type`) VALUES
(1, '1', 'demande congé'),
(47, '2', 'demande autorisation'),
(48, '3', 'demande démission'),
(49, '4', 'demande congé matérnité'),
(85, '6', 'demande autorisation 2j');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `role`) VALUES
(1, 'admin', '123456', 'admin');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(6) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `password`) VALUES
(1, 'admin@gmail.com', 'Admin@@2020');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `demande`
--
ALTER TABLE `demande`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKqednfe93bca6g35sse9r4x3o1` (`type_demande_id`),
  ADD KEY `FKlnmfjhwp2gcwsilu3a93es1t1` (`salarier_id`),
  ADD KEY `FK4vyk11lk9ee5lr4cfiwlw1wy9` (`salarier`);

--
-- Index pour la table `diplome`
--
ALTER TABLE `diplome`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `fonction`
--
ALTER TABLE `fonction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKq127lk34xo1y73oeqt71t1b27` (`salarier_id`);

--
-- Index pour la table `formation`
--
ALTER TABLE `formation`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `grade`
--
ALTER TABLE `grade`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `indisponibilite`
--
ALTER TABLE `indisponibilite`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKoha0j839nng8aurigj2qk4sox` (`salarier_id`),
  ADD KEY `FK7cwypahky8uhyvo6b6ajrxjm6` (`salarier`);

--
-- Index pour la table `salarier`
--
ALTER TABLE `salarier`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKtdo4m12gp26r4oio4cn9xiix4` (`salarier_id`),
  ADD KEY `FKrlw5wi2kkk1gec0klbnixbixx` (`salarier`);

--
-- Index pour la table `salarier_diplome`
--
ALTER TABLE `salarier_diplome`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK8f81mqdyrvdsuqnsk9ymy92k7` (`diplome_id`);

--
-- Index pour la table `salarier_formation`
--
ALTER TABLE `salarier_formation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKcydqc6kbm5y98sq8nqos7l8ka` (`formation_id`);

--
-- Index pour la table `situation_demande`
--
ALTER TABLE `situation_demande`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `type_demande`
--
ALTER TABLE `type_demande`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
