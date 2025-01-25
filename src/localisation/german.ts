import { Translations, Phrase } from './types';

/* eslint-disable prettier/prettier */
const GERMAN: Translations = {
  [Phrase.NoVideosSaved]: 'Du hast keine Videos in dieser Kategorie gespeichert.',
  [Phrase.FirstTimeHere]: 'Wenn du das erste Mal die Anwendung gestartet hast, können Installationsanweisungen dem folgenden Link entnommen werden. Falls du Probleme haben solltest, nutz bitte den Discord #help Kanal um Unterstützung zu bekommen.',
  [Phrase.SetupInstructions]: 'Installationsanweisungen',
  [Phrase.ClipsDisplayedHere]: 'Videos, die du clipst werden hier angezeigt.',
  [Phrase.NoClipsSaved]: 'Du hast keine gespeicherten Videoclips',
  [Phrase.StoragePathDescription]: 'Speicherort der Aufnahmen. Warcraft Recorder nimmt Besitz von dem Ordner. Er sollte beim installieren leer sein und du solltest keine Dateien in dem Ordner manuell verändern.',
  [Phrase.SeparateBufferPathDescription]: 'Anschalten der Option temporär Videos an einem Puffer-Ort zu speichern. Dieser sollte immer lokal sein. Dieses Feature ist für Leute gedacht, die ihr abgeschlossenes Video auf einem NFS speichern wollen, aber nicht ihr Netzwerk konstant beim aufnehmen belasten wollen.',
  [Phrase.BufferStoragePathDescription]: 'Speicherort für Puffer Aufnahmen. Wenn dieser nicht gesetzt ist, wird der normale Speicherort genutzt.',
  [Phrase.RetailLogPathDescription]: 'Speicherort deines Logs Ordners von deiner Retail World of Warcraft Installation, e.g. "D:\\World of Warcraft\\_retail_\\Logs".',
  [Phrase.ClassicLogPathDescription]: 'Speicherort deines Logs Ordners von deiner Classic World of Warcraft Installation, e.g. "D:\\World of Warcraft\\_classic_\\Logs".',
  [Phrase.EraLogPathDescription]: 'Speicherort deines Logs Ordners von deiner Classic Era World of Warcraft Installation, e.g. "D:\\World of Warcraft\\_classic_era_\\Logs".',
  [Phrase.MaxStorageDescription]: 'Maximal erlaubte Speichergröße, den die Anwendungen für Videodateien nutzen darf. Die ältesten Videos werden nach und nach gelöscht, um sicherzustellen, dass man unter der gesetzten Speichergröße bleibt. Aufnahmen werden nicht gestoppt. Auf 0 setzen, um unbegrenzten Speicherplatz zu erlauben.',
  [Phrase.MonitorIndexDescription]: 'Der Monitor wird aufgenommen. Nur anwendbar, wenn Monitor Aufnahme ausgewählt ist.',
  [Phrase.SelectedCategoryDescription]: 'Zuletzt ausgewählte Video Kategorie in der Benutzeroberfläche.',
  [Phrase.AudioInputDevicesDescription]: 'Audioeingabegeräte, die in Aufnahme inbegriffen sein sollen.',
  [Phrase.AudioOutputDevicesDescription]: 'Audioausgabegeräte, die in Aufnahme inbegriffen sein sollen.',
  [Phrase.MinEncounterDurationDescription]: 'Bosskämpfe die kürzer als die gesetzte Dauer sind werden nicht aufgenommen. Diese Einstellung soll vermeiden, dass Boss Resets aufgenommen werden.',
  [Phrase.StartUpDescription]: 'Starte die Anwendung automatisch, wenn Windows startet..',
  [Phrase.StartMinimizedDescription]: 'Öffnet die Anwendung minimiert zur Taskleiste.',
  [Phrase.ObsOutputResolutionDescription]: 'Auflösung von Aufnahmen, die auf der Festplatte gespeichert werden.Stell dies auf die Auflösung deines Monitors oder auf weniger, wenn du es runterskalieren möchtest.',
  [Phrase.ObsFPSDescription]: 'Die Anzahl der Bilder pro Sekunde(FPS) mit der das Video aufgenommen werden soll. Niedrigere FPs erzeugen kleinere Videodateien, aber auch zu einer abgehackteren Wiedergabe.',
  [Phrase.ObsForceMonoDescription]: 'Legt fest, ob das Audioeingabegerät in Mono aufgenommen werden soll. Option einschalten, wenn dein Mikrofon nur über einen Stereokanal ausgegeben wird.',
  [Phrase.ObsQualityDescription]: 'Qualität in der aufgenommen werden soll. Höhere Qualität belastet den Encoder stärker und verbraucht mehr Speicherplatz pro Video.',
  [Phrase.ObsCaptureModeDescription]: 'Der Aufnahmemodus der von OBS zur Aufnahme genutzt werden soll. Finde mehr Informationen dazu im Discord #faq Kanal.',
  [Phrase.ObsRecEncoderDescription]: 'Der Video-Encoder, der genutzt werden soll. Hardware Encoder werden in der Regel bevorzugt und gibt bessere Leistung, aber dies ist spezifisch du deiner Grafikkarte.',
  [Phrase.RecordRetailDescription]: 'Ob die Anwendung Retail aufnehmen soll.',
  [Phrase.RecordClassicDescription]: 'Ob die Anwendung Classic aufnehmen soll',
  [Phrase.RecordEraDescription]: 'Ob die Anwendung Classic Era aufnehmen soll',
  [Phrase.RecordRaidsDescription]: 'Ob die Anwendung Schlachtzüge aufnehmen soll.',
  [Phrase.RecordDungeonsDescription]: 'Ob die Anwendung Mythisch+ aufnehmen soll.',
  [Phrase.RecordTwoVTwoDescription]: 'Ob die Anwendung 2v2 aufnehmen soll.',
  [Phrase.RecordThreeVThreeDescription]: 'Ob die Anwendung 3v3 aufnehmen soll.',
  [Phrase.RecordFiveVFiveDescription]: 'Ob die Anwendung 5v5 aufnehmen soll.',
  [Phrase.RecordSkirmishDescription]: 'Ob die Anwendung Geplänkel aufnehmen soll.',
  [Phrase.RecordSoloShuffleDescription]: 'Ob die Anwendung Gemischtes Einzel aufnehmen soll',
  [Phrase.RecordBattlegroundsDescription]: 'Ob die Anwendung Schlachtfelder aufnehmen soll.',
  [Phrase.CaptureCursorDescription]: 'Ob die Anwendung Mauszeiger aufnehmen soll',
  [Phrase.MinKeystoneLevelDescription]: 'Die Schlüsselsteinstufe ab dem  aufgenommen werden soll..',
  [Phrase.MinRaidDifficultyDescription]: 'Die Schwierigkeitsstufe ab dem ein Schlachtzug aufgenommen werden soll - wird nur auf Retail angewendet.',
  [Phrase.MinimizeOnQuitDescription]: 'Ob die Schließen-Schaltfläche die Anwendung minimieren soll anstatt zu beenden.',
  [Phrase.MinimizeToTrayDescription]: 'Ob die Minimieren-Schaltfläche die Anwendung zur System Tray oder Taskleiste minimiert werden soll',
  [Phrase.ChatOverlayEnabledDescription]: 'Ob ein Chat Overlay zur Szene hingefügt werden soll.',
  [Phrase.ChatOverlayOwnImageDescription]: 'Ob ein benutzerdefiniertes Bild als Chat Overlay genutzt werden soll. Dieses Feature ist nur zugänglich für Pro-Nutzer.',
  [Phrase.ChatOverlayOwnImagePathDescription]: 'Die PNG Datei, die als Chat Overlay genutzt werden soll. Dieses Feature ist nur zugänglich für Pro-Nutzer.',
  [Phrase.ChatOverlayWidthDescription]: 'Die Breite des Chat Overlays',
  [Phrase.ChatOverlayHeightDescription]: 'Die Höhe des Chat Overlays.',
  [Phrase.ChatOverlayScaleDescription]: 'Die Skalierung des Chat Overlays',
  [Phrase.ChatOverlayXPositionDescription]: 'Die X-Position von dem Chat Overlay.',
  [Phrase.ChatOverlayYPositionDescription]: 'Die Y-Position von dem Chat Overlay.',
  [Phrase.SpeakerVolumeDescription]: 'Die Lautstärke mit der dein Audioausgabegerät aufgenommen werden soll, von 0 bis 1.',
  [Phrase.MicVolumeDescription]: 'Die Lautstärke mit der ein Audioeingabegerät aufgenommen werden soll, von 0 bis 1.',
  [Phrase.DeathMarkersDescription]: 'Todes Markierungen in der Video Zeitleiste anzeigen.',
  [Phrase.EncounterMarkersDescription]: 'Bosskampf Markierungen in der Video Zeitleiste anzeigen.',
  [Phrase.RoundMarkersDescription]: 'Runden Markierungen in der Video Zeitleiste anzeigen.',
  [Phrase.PushToTalkDescription]: 'Ob das Audioeingabegerät durchgehend aufgenommen werden soll oder nur, wenn ein Hotkey runter gedrückt wird',
  [Phrase.PushToTalkKeyDescription]: 'Der  Hotkey, dargestellt durch die Tastenbezeichnung/Tastenkombination',
  [Phrase.PushToTalkMouseButtonDescription]: 'Die Drücken zum sprechen Maustaste.',
  [Phrase.PushToTalkModifiersDescription]: 'Eine Kommata getrennte Liste von Modifizierungstasten in Verbindung mit deinem Drücken zum sprechen Hotkey.',
  [Phrase.ObsAudioSuppressionDescription]: 'Unterdrückung von Hintergrundgeräuschen, die dein Mirkofon aufnimmt. Dies kann dafür sorgen, dass man z.B. den Tastenschlag,Atmung, etc. weniger hört.',
  [Phrase.RaidOverrunDescription]: 'Anzahl der Sekunden die nach einem Bosskill noch aufgenommen werden soll.',
  [Phrase.DungeonOverrunDescription]: 'Anzahl der Sekunden die nach einem Instanzabschluss noch aufgenommen werden soll.',
  [Phrase.CloudStorageDescription]: 'Anschalten der Cloud Wiedergabe.',
  [Phrase.CloudUploadDescription]: 'Lade deine Videos in die Cloud hoch. Dies schaltet sowohl das automatische hochladen von Aufnahmen als auch die manuelle Option bestehende Videos hochzuladen ein',
  [Phrase.CloudUploadRateLimitDescription]: 'Ob das Hochladen in die Cloud limitiert werden soll. Sinnvoll, wenn das Hochladen für Lags sorgt',
  [Phrase.CloudUploadRateLimitMbpsDescription]: 'Das Hochladen-Limit in MB/s ',
  [Phrase.CloudAccountNameDescription]: 'Dein Warcraft Recorder Account Benutzername.',
  [Phrase.CloudAccountPasswordDescription]: 'Dein Warcraft Recorder Account Password.',
  [Phrase.CloudGuildNameDescription]: 'Die Gilde oder Gruppe, die  dein Account zugehörig ist.',
  [Phrase.CloudUpload2v2Description]: 'Ob die 2v2 Aufnahmen in die Cloud hochgeladen werden sollen.',
  [Phrase.CloudUpload3v3Description]: 'Ob die 3v3 Aufnahmen in die Cloud hochgeladen werden sollen.',
  [Phrase.CloudUpload5v5Description]: 'Ob die 5v5 Aufnahmen in die Cloud hochgeladen werden sollen.',
  [Phrase.CloudUploadSkirmishDescription]: 'Ob die Geplänkel Aufnahmen in die Cloud hochgeladen werden sollen.',
  [Phrase.CloudUploadSoloShuffleDescription]: 'Ob die Gemischtes Einzel Aufnahmen in die Cloud hochgeladen werden sollen.',
  [Phrase.CloudUploadDungeonsDescription]: 'Ob die Mythisch+ Aufnahmen in die Cloud hochgeladen werden sollen.',
  [Phrase.CloudUploadRaidsDescription]: 'Ob die Schlachtzug Aufnahmen in die Cloud hochgeladen werden sollen.',
  [Phrase.CloudUploadBattlegroundsDescription]: 'Ob die Schlachtfelder Aufnahmen in die Cloud hochgeladen werden sollen.',
  [Phrase.CloudUploadRaidMinDifficultyDescription]: 'Die Schwierigkeitsstufe ab der automatisch in die Cloud hochgeladen werden soll',
  [Phrase.CloudUploadDungeonMinLevelDescription]: 'Die Schlüsselsteinstufe ab der automatisch in die Cloud hochgeladen werden soll',
  [Phrase.LanguageDescription]: 'Die Sprache der Anwendung.',
  [Phrase.RecordingsHeading]: 'Aufnahmen',
  [Phrase.SettingsHeading]: 'Einstellungen',
  [Phrase.GeneralButtonText]: 'Allgemein',
  [Phrase.SceneButtonText]: 'Szene',
  [Phrase.Version]: 'Version',
  [Phrase.VideoCategoryTwoVTwoLabel]: '2v2',
  [Phrase.VideoCategoryThreeVThreeLabel]: '3v3',
  [Phrase.VideoCategoryFiveVFiveLabel]: '5v5',
  [Phrase.VideoCategorySkirmishLabel]: 'Geplänkel',
  [Phrase.VideoCategorySoloShuffleLabel]: 'Gemischtes Einzel',
  [Phrase.VideoCategoryMythicPlusLabel]: 'Mythisch+',
  [Phrase.VideoCategoryRaidsLabel]: 'Schlachtzug',
  [Phrase.VideoCategoryBattlegroundsLabel]: 'Schlachtfelder',
  [Phrase.VideoCategoryClipsLabel]: 'Clips',
  [Phrase.UpdateAvailableTooltip]: 'Eine neue Version ist verfügbar.',
  [Phrase.LogsButtonLabel]: 'Logs',
  [Phrase.DiscordButtonLabel]: 'Discord',
  [Phrase.TestButtonUnable]: 'Es ist nicht möglich einen Test-Durchlauf gerade durchzuführen. Um einen Testdurchlauf durchzuführen, musst dein World of Warcraft gestartet sein, deine Einstellungen müssen gültig sein und du darfst aktuell noch in keiner Aktivität sein.',
  [Phrase.GeneralSettingsLabel]: 'Allgemeine Einstellungen',
  [Phrase.DiskStorageFolderLabel]: 'Speicherordner',
  [Phrase.SeparateBufferFolderLabel]: 'Separater Buffer Ordner',
  [Phrase.BufferFolderLabel]: 'Buffer Ordner',
  [Phrase.MaxDiskStorageLabel]: 'Maximale Speichergröße(GB)',
  [Phrase.WindowsSettingsLabel]: 'Windows Einstellungen',
  [Phrase.RunOnStartupLabel]: 'Autostart',
  [Phrase.StartMinimizedLabel]: 'Minimiert starten',
  [Phrase.MinimizeOnQuitLabel]: 'Minimieren beim schließen',
  [Phrase.MinimizeToTrayLabel]: 'Minimieren zur System Tray',
  [Phrase.LocaleSettingsLabel]: 'Spracheinstellung',
  [Phrase.LanguageLabel]: 'Sprache',
  [Phrase.GameSettingsLabel]: 'Spieleinstellungen',
  [Phrase.RecordRetailLabel]: 'Retail aufnehmen',
  [Phrase.RetailLogPathLabel]: 'Retail Log Pfad',
  [Phrase.RecordClassicLabel]: 'Classic aufnehmen',
  [Phrase.ClassicLogPathLabel]: 'Classic Log Pfad',
  [Phrase.RecordClassicEraLabel]: 'Classic Era aufnehmen',
  [Phrase.ClassicEraLogPathLabel]: 'Classic Era Log Pfad',
  [Phrase.PVESettingsLabel]: 'PvE Einstellungen',
  [Phrase.RecordRaidsLabel]: 'Schlachtzüge aufnehmen',
  [Phrase.MinimumEncounterDurationLabel]: 'Mindeste Bosskampf Dauer (sek)',
  [Phrase.RaidOverrunLabel]: 'Schlachtzug Überlauf (sek)',
  [Phrase.MinimumRaidDifficultyLabel]: 'Mindeste Schlachtzug Schwierigkeitsstufe',
  [Phrase.RecordMythicPlusLabel]: 'Mythisch+ aufnehmen',
  [Phrase.MinimumKeystoneLevelLabel]: 'Mindeste Schlüsselsteinstufe',
  [Phrase.MythicPlusOverrunLabel]: 'Mythisch+ Überlauf (sek)',
  [Phrase.PVPSettingsLabel]: 'PvP Einstellungen',
  [Phrase.Record2v2Label]: '2v2 aufnehmen',
  [Phrase.Record3v3Label]: '3v3 aufnehmen',
  [Phrase.Record5v5Label]: '5v5 aufnehmen',
  [Phrase.RecordSkirmishLabel]: 'Geplänkel aufnehmen',
  [Phrase.RecordSoloShuffleLabel]: 'Gemischtes Einzel aufnehmen',
  [Phrase.RecordBattlegroundsLabel]: 'Schlachtfelder aufnehmen',
  [Phrase.CloudSettingsLabel]: 'Cloud Einstellungen',
  [Phrase.CloudPlaybackLabel]: 'Cloud Wiedergabe',
  [Phrase.UserEmailLabel]: 'Benutzer oder E-Mail',
  [Phrase.PasswordLabel]: 'Passwort',
  [Phrase.GuildNameLabel]: 'Gildenname',
  [Phrase.CloudUploadLabel]: 'Cloud Upload',
  [Phrase.UploadRateLimitToggleLabel]: 'Upload Limitierung',
  [Phrase.UploadRateLimitValueLabel]: 'Upload Limitierung (MB/s)',
  [Phrase.UploadRaidsLabel]: 'Schlachtzüge hochladen',
  [Phrase.UploadDifficultyThresholdLabel]: 'Schwierigkeitsstufen Schwelle zum hochladen',
  [Phrase.UploadMythicPlusLabel]: 'Mythisch+ hochladen',
  [Phrase.UploadLevelThresholdLabel]: 'Schlüsselsteinstufen Schwelle zum hochladen',
  [Phrase.Upload2v2Label]: '2v2 hochladen',
  [Phrase.Upload3v3Label]: '3v3 hochladen',
  [Phrase.Upload5v5Label]: '5v5 hochladen',
  [Phrase.UploadSkirmishLabel]: 'Geplänkel hochladen',
  [Phrase.UploadSoloShuffleLabel]: 'Gemischtes Einzel hochladen',
  [Phrase.UploadBattlgroundsLabel]: 'Schlachtfelder hochladen',
  [Phrase.SettingsDisabledText]: 'Diese Einstellungen können nicht bearbeitet werden während eine Aufnahme läuft.',
  [Phrase.SomeSettingsDisabledText]: 'Einige Einstellung in der Kategorie sind aktuell versteckt, da diese nicht bearbeitet werden können während eine Aufnahme läuft.',
  [Phrase.InvalidRetailLogPathText]: 'Ungültiger Retail Log Pfad',
  [Phrase.InvalidClassicLogPathText]: 'Ungültiger Classic Log Pfad.',
  [Phrase.InvalidClassicEraLogPathText]: 'Ungültiger Classic Era Log Pfad.',
  [Phrase.CannotBeEmpty]: 'Kann nicht leer sein',
  [Phrase.OneOrGreater]: 'Muss 1 oder größer sein',
  [Phrase.SourceHeading]: 'Quelle',
  [Phrase.VideoHeading]: 'Video',
  [Phrase.AudioHeading]: 'Audio',
  [Phrase.OverlayHeading]: 'Overlay',
  [Phrase.CaptureModeLabel]: 'Aufnahmemodus',
  [Phrase.WindowCaptureValue]: 'Fenster',
  [Phrase.GameCaptureValue]: 'Spiel',
  [Phrase.MonitorCaptureValue]: 'Monitor',
  [Phrase.MonitorLabel]: 'Monitor',
  [Phrase.CaptureCursorLabel]: 'Mauszeiger aufnehmen',
  [Phrase.FPSLabel]: 'FPS',
  [Phrase.CanvasResolutionLabel]: 'Bildflächen Auflösung',
  [Phrase.QualityLabel]: 'Qualität',
  [Phrase.VideoEncoderLabel]: 'Video Encoder',
  [Phrase.SpeakersLabel]: 'Lautsprecher',
  [Phrase.MicrophonesLabel]: 'Mikrofon',
  [Phrase.AudioSuppressionLabel]: 'Audio Unterdrückung',
  [Phrase.MonoInputLabel]: 'Mono Eingabe',
  [Phrase.PushToTalkLabel]: 'Drücken zum Reden',
  [Phrase.PushToTalkKeyLabel]: 'Drücken zum Reden Taste',
  [Phrase.PressAnyKeyCombination]: 'Drück irgendeine Tastenkombination...',
  [Phrase.ClickToBind]: 'Drücken zum setzen',
  [Phrase.ClickToRebind]: 'Drücken zum neu setzen',
  [Phrase.Mouse]: 'Maus',
  [Phrase.ChatOverlayLabel]: 'Chat Overlay',
  [Phrase.OwnImageLabel]: 'Benutzerdefiniertes Bild',
  [Phrase.ImagePathLabel]: 'Bildpfad',
  [Phrase.WidthLabel]: 'Breite',
  [Phrase.HeightLabel]: 'Höhe',
  [Phrase.HorizontalLabel]: 'Horizontal',
  [Phrase.VerticalLabel]: 'Vertikal',
  [Phrase.ScaleLabel]: 'Skalierung',
  [Phrase.TableHeaderEncounter]: 'Bosskampf',
  [Phrase.TableHeaderResult]: 'Ergebnis',
  [Phrase.TableHeaderPull]: 'Pull',
  [Phrase.TableHeaderDifficulty]: 'Schwierigkeitsstufe',
  [Phrase.TableHeaderDuration]: 'Dauer',
  [Phrase.TableHeaderDate]: 'Datum',
  [Phrase.TableHeaderViewpoints]: 'Sichtweisen',
  [Phrase.TableHeaderMap]: 'Karte',
  [Phrase.TableHeaderType]: 'Typ',
  [Phrase.TableHeaderTag]: 'Tag',
  [Phrase.SearchLabel]: 'Suche',
  [Phrase.SearchSuggestionMythicPlus]: 'Probier: timed Tempel gestern +18 Priester Lesezeichen verstärkt',
  [Phrase.SearchSuggestionRaid]: 'Probier: Sieg heute retail mythisch zerstörung Lesezeichen',
  [Phrase.SearchSuggestionBattlegrounds]: 'Probier: Kriegshymnenschlucht Lesezeichen',
  [Phrase.SearchSuggestionSoloShuffle]: 'Probier: Dalaran 6-0 Lesezeichen',
  [Phrase.SearchSuggestionDefault]: 'Probier: Sieg Enigmatiegel Arkan Lesezeichen',
  [Phrase.ShowRoundsLabel]: 'Runden anzeigen',
  [Phrase.ShowDeathsLabel]: 'Tode anzeigen',
  [Phrase.ShowEncountersLabel]: 'Bosskämpfe anzeigen',
  [Phrase.FullScreenTooltip]: 'Fullscreen',
  [Phrase.PlaybackSpeedTooltip]: 'Wiedergabegeschwindigkeit',
  [Phrase.ClipTooltip]: 'Clip',
  [Phrase.ClipUnavailableTooltip]: 'Du kannst nur lokal gespeicherte Videos clipen',
  [Phrase.ConfirmTooltip]: 'Bestätigen',
  [Phrase.CancelTooltip]: 'Abbrechen',
  [Phrase.TagButtonTooltip]: 'Einen Tag hinzufügen',
  [Phrase.StarButtonTooltip]: 'Niemals altern lassen',
  [Phrase.UnstarButtonTooltip]: 'altert lassen',
  [Phrase.OpenFolderButtonTooltip]: 'Speicherort öffnen',
  [Phrase.DeleteButtonTooltip]: 'Löschen',
  [Phrase.BulkDeleteButtonTooltip]: 'Ausgewählte löschen',
  [Phrase.ShareLinkButtonTooltip]: 'Teilbaren Link generieren',
  [Phrase.CloudButtonTooltip]: 'Cloud Version nutzen',
  [Phrase.DiskButtonTooltip]: 'Lokale version nutzen',
  [Phrase.UploadButtonTooltip]: 'In die Cloud hochladen',
  [Phrase.DownloadButtonTooltip]: 'in Speicherort herunerladen',
  [Phrase.StatusTitleRecording]: 'Aufnahme',
  [Phrase.StatusTitleWaiting]: 'Warten',
  [Phrase.StatusTitleInvalid]: 'Ungültig',
  [Phrase.StatusTitleReady]: 'Bereit',
  [Phrase.StatusTitleFatalError]: 'Fehler',
  [Phrase.StatusTitleOverrunning]: 'Überlaufen',
  [Phrase.StatusTitleReconfiguring]: 'Neukonfigurieren',
  [Phrase.StatusDescriptionRecording]: 'Warcraft Recorder nimmt aktuell auf',
  [Phrase.StatusDescriptionForceEnd]: 'Du kannst eine Aufnahme eigenständig beenden. Normalerweise sollte dies nicht nötig sein. Es kann aber helfen einen abgebrochenen Mythisch+ Lauf abzubrechen, der sonst erst nach ein paar Minuten abbrechen würde.',
  [Phrase.StatusDescriptionWaiting]: 'Warte auf den Start von World of Warcraft',
  [Phrase.StatusDescriptionConfiguredToRecord]: 'Warcraft Recorder ist darauf eingestellt aufzunehmen',
  [Phrase.StatusDescriptionMisconfigured]: 'Warcraft Recorder ist ungültig eingestellt',
  [Phrase.StatusDescriptionResolveError]: 'Bitte lies den untenstehenden Fehler',
  [Phrase.StatusDescriptionDetectedRunning]: 'Es wurde erkannt, dass World of Warcraft läuft',
  [Phrase.StatusDescriptionWatchingLogs]: 'Warcraft Recorder wartet auf ein Event, dass im Combat Log steht, zum auslösen einer Aufnahme. Liest Log Pfäde',
  [Phrase.StatusDescriptionTip]: 'Hinweis',
  [Phrase.StatusDescriptionIfNoRecording]: 'Wenn die Aufnahme nicht gestartet ist, überprüfe deine Log-Einstellungen im Spiel und gehe sicher, dass dein Log Pfad richtig ist.',
  [Phrase.StatusDescriptionFatalError]: 'Warcraft Recorder hatte einen kritischen Fehler',
  [Phrase.StatusDescriptionPleaseResolve]: 'Bitte versuch den untenstehenden Fehler zu beheben und starte Warcraft Recorder neu.',
  [Phrase.StatusDescriptionIfRecurring]: 'Wenn das Problem mehrfach auftrifft, bitte frag im Discord nach Hilfe. Siehe die angehefteten Nachrichten im #help Kanal, um schnell möglichst Hilfe zu bekommen.',
  [Phrase.StatusDescriptionOverrunning]: 'Warcraft Recorder hat eine abgeschlossene Aktivität erkannt und nimmt noch für ein paar Sekunden auf, um die Reaktionen einzufangen.',
  [Phrase.StatusDescriptionNothing]: 'Nichts. Du solltest einen Spiel-Modus in den Allgemeinen Einstellungen -> Spiel auswählen.',
  [Phrase.StatusHeading]: 'Status',
  [Phrase.StatusButtonForceEndLabel]: 'Stopp erzwingen',
  [Phrase.Retail]: 'Retail',
  [Phrase.Classic]: 'Classic',
  [Phrase.Era]: 'Era',
  [Phrase.MicListeningTooltip]: 'Hört zu',
  [Phrase.MicMutedTooltip]: 'Stummgeschaltet',
  [Phrase.CrashHappenedText]: 'Ein OBS Absturz ist aufgetreten und wurde sich von erholt. Dies sollte im Normalfall nicht passieren. Vielleicht möchtest du Hilfe suchen, in dem du deine Warcraft Recorder und OBS Logs im Discord teilst.',
  [Phrase.SettingsPageApplicationHeader]: 'Anwendung',
  [Phrase.SettingsPageGameHeader]: 'Spiel',
  [Phrase.SettingsPageProHeader]: 'Pro',
  [Phrase.UpdateAvailableTitle]: 'Neue Version verfügbar!',
  [Phrase.UpdateAvailableText]: 'Es gibt eine neue Version für Warcraft Recorder. Drück auf den Knopf unten, um sie herunterzuladen.',
  [Phrase.UpdateAvailableDownloadButtonText]: 'Herunterladen',
  [Phrase.TestButtonHeading]: 'Wähle eine Kategorie zum testen.',
  [Phrase.SystemTrayOpen]: 'Öffnen',
  [Phrase.SystemTrayQuit]: 'Schließen',
  [Phrase.Kill]: 'Sieg',
  [Phrase.Wipe]: 'Niederlage',
  [Phrase.Win]: 'Sieg',
  [Phrase.Loss]: 'Niederlage',
  [Phrase.Abandoned]: 'Abgebrochen',
  [Phrase.Depleted]: 'Depleted',
  [Phrase.AreYouSure]: 'Bist du dir sicher?',
  [Phrase.ThisWillPermanentlyDelete]: 'Die Löschung ist permanent.',
  [Phrase.RecordingsFullStop]: 'Aufnahme(n).',
  [Phrase.ThisSelectionIncludes]: 'Dieser Abschnitt enthält',
  [Phrase.StarredRecordingNotDeleted]: 'starred recording(s) which will not be deleted.',
  [Phrase.Hold]: 'Halten',
  [Phrase.ToSkip]: 'to skip this prompt in future.',
  [Phrase.Death]: 'Tod',
  [Phrase.AddADescription]: 'Füge eine Beschreibung hinzu',
  [Phrase.TagDialogText]: 'This description is queryable in the search bar.',
  [Phrase.Clear]: 'Löschen',
  [Phrase.Save]: 'Speichern',
  [Phrase.ShareableLinkTitle]: 'Teilbarer Link wurde generiert und befindet sich in deiner Ablage.',
  [Phrase.ShareableLinkText]: 'Dieser Link ist bis zu 30 Tage gültig.',
  [Phrase.ShareableLinkFailedTitle]: 'Link Erzeugung ist fehlgeschlagen',
  [Phrase.ShareableLinkFailedText]: 'Bitte siehe Logs für mehr Details',
  [Phrase.CloudUsage]: 'Cloud Nutzung',
  [Phrase.DiskUsage]: 'Speicher Nutzung',
  [Phrase.Hardware]: 'Hardware',
  [Phrase.Software]: 'Software',
  [Phrase.All]: 'Alle',
  [Phrase.Own]: 'Eigene',
  [Phrase.None]: 'Keine',
  [Phrase.On]: 'An',
  [Phrase.Off]: 'Aus',
  [Phrase.Ultra]: 'Ultra',
  [Phrase.High]: 'Hoch',
  [Phrase.Moderate]: 'Durchschnittlich',
  [Phrase.Low]: 'Niedrig',
  [Phrase.LFR]: 'LFR',
  [Phrase.Normal]: 'Normal',
  [Phrase.Heroic]: 'Heroisch',
  [Phrase.Mythic]: 'Mythisch',
  [Phrase.Pvp]: 'PVP',
  [Phrase.ErrorAccountEmpty]: 'Account Name darf nicht leer sein.',
  [Phrase.ErrorPasswordEmpty]: 'Account Passwort darf nicht leer sein.',
  [Phrase.ErrorGuildEmpty]: 'Gildenname darf nicht leer sein.',
  [Phrase.ErrorUserNotAuthorizedPlayback]: 'Benutzer ist nicht berechtigt auf diese Gilde zuzugreifen.',
  [Phrase.ErrorUserNotAuthorizedUpload]: 'Benutzer ist nicht berechtigt auf diese Gilde hochzuladen.',
  [Phrase.ErrorStoragePathInvalid]: 'Speicherpfad ist ungültig.',
  [Phrase.ErrorBufferPathInvalid]: 'Buffer Speicherpfad ist ungültig.',
  [Phrase.ErrorStoragePathSameAsBufferPath]: 'Speicher Pfad ist der gleiche wie der  Buffer Pfad.',
  [Phrase.ErrorCustomOverlayNotAllowed]: 'Um ein benutzerdefiniertes Overlay zu nutzen, aktiviere den Cloud Speicher.',
  [Phrase.ErrorNoCustomImage]: 'Overlay Bild wurde nicht übergeben von benutzerdefiniertes Overlay.',
  [Phrase.ErrorCustomImageFileType]: 'Overlay Bild muss eine .png oder .gif Datei sein.',
  [Phrase.ErrorCustomImageNotExist]: 'Spezifizierte Datei existiert nicht.',
  [Phrase.InvalidRetailLogPath]: 'Ungültiger Retail Log Pfad.',
  [Phrase.InvalidClassicLogPath]: 'Ungültiger Classic Log Pfad.',
  [Phrase.InvalidEraLogPath]: 'Ungültiger Classic Era Log Pfad.',
  [Phrase.SelectAnOutputDevice]: 'Wähle ein Audioausgabegerät',
  [Phrase.SelectAnInputDevice]: 'Wähle ein Audioeingabegerät.',
  [Phrase.ClickToSelectAll]: 'Klicken Sie, um alle auszuwählen',
  [Phrase.ClickToSortAsc]: 'Klicken Sie, um aufsteigend zu sortieren',
  [Phrase.ClickToSortDec]: 'Klicken Sie, um absteigend zu sortieren',
  [Phrase.ClickToClearSort]: 'Klicken Sie, um die Sortierung zu löschen',
  [Phrase.Start]: 'Start',
  [Phrase.End]: 'Ende',
  [Phrase.Cloud]: "Wolke",
  [Phrase.Disk]: "Scheibe",
  [Phrase.Starred]: "Stern",
  [Phrase.Tagged]: "Markiert",
  [Phrase.Today]: "Heute",
  [Phrase.Yesterday]: "Gestern",
  [Phrase.Chests]: "Truhen",
  [Phrase.Timed]: "Zeitgesteuert",
};

export default GERMAN;