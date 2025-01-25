import { Translations, Phrase } from './types';

/* eslint-disable prettier/prettier */
const KOREAN: Translations = {
  [Phrase.NoVideosSaved]: '이 카테고리에 저장된 동영상이 없습니다.',
  [Phrase.FirstTimeHere]: '처음 사용하는 경우 아래 링크에서 설정 방법을 확인할 수 있습니다.',
  [Phrase.SetupInstructions]: '설정 방법',
  [Phrase.ClipsDisplayedHere]: '클립한 동영상이 여기에 표시됩니다.',
  [Phrase.NoClipsSaved]: '저장된 클립이 없습니다.',
  [Phrase.StoragePathDescription]: '기록을 저장할 위치. 프로그램이 폴더의 소유권을 가지며, 초기 설정 시 비어 있어야 하며 그 자리에서 내용을 수정해서는 안 됩니다.(영문 폴더명 권장)',
  [Phrase.SeparateBufferPathDescription]: '임시 기록을 별도의 위치에 저장할 수 있도록 설정합니다.',
  [Phrase.BufferStoragePathDescription]: '임시 기록을 저장할 위치. 설정하지 않은 채로 두면 기본 저장 경로에서 관리됩니다.',
  [Phrase.RetailLogPathDescription]: '본섭 로그 폴더 위치 (ex: "World of Warcraft\\_retail_\\Logs")',
  [Phrase.ClassicLogPathDescription]: '클래식 로그 폴더 위치 (ex: "World of Warcraft\\_classic_\\Logs")',
  [Phrase.EraLogPathDescription]: '클래식 시대 로그 폴더 위치 (ex: "World of Warcraft\\_classic_era_\\Logs")',
  [Phrase.MaxStorageDescription]: '저장소 최대 허용 용량. 무제한은 "0"으로 설정. 범위 내로 유지되도록 가장 오래된 기록물은 하나씩 삭제됩니다.',
  [Phrase.MonitorIndexDescription]: '모니터가 여러 대일 경우 개별 항목이 생성되어 기록을 원하는 모니터를 선택할 수 있습니다.',
  [Phrase.SelectedCategoryDescription]: '마지막으로 선택한 동영상 카테고리',
  [Phrase.AudioInputDevicesDescription]: '기록에 포함할 오디오 입력 장치',
  [Phrase.AudioOutputDevicesDescription]: '기록에 포함할 오디오 출력 장치',
  [Phrase.MinEncounterDurationDescription]: '이 시간보다 짧은 전투는 기록되지 않습니다. 이 설정은 보스 리셋이 저장되지 않도록 하는데 목적이 있습니다.',
  [Phrase.StartUpDescription]: '윈도우가 시작될 때 자동으로 프로그램 시작',
  [Phrase.StartMinimizedDescription]: '윈도우 시스템 트레이로 실행',
  [Phrase.ObsOutputResolutionDescription]: '기록물의 해상도. 게임 해상도 크기로 설정 또는 그 이하',
  [Phrase.ObsFPSDescription]: '기록물의 초당 프레임 수. FPS가 낮을수록 동영상 크기는 작아지지만 재생이 원할하지 않습니다.',
  [Phrase.ObsForceMonoDescription]: '입력 장치를 모노로 강제할지 여부. 오디오 마이크가 하나의 스테레오 채널에서만 재생되는 경우 활성화',
  [Phrase.ObsQualityDescription]: '기록물 품질. 높을수록 더 많이 작동하고 더 많은 디스크 공간을 사용합니다.',
  [Phrase.ObsCaptureModeDescription]: '녹화할 때 사용할 모드.',
  [Phrase.ObsRecEncoderDescription]: '사용할 비디오 인코더. 일반적으로 하드웨어(Hardware) 인코더 권장',
  [Phrase.RecordRetailDescription]: '본섭을 기록해야 하는지 여부',
  [Phrase.RecordClassicDescription]: '클래식을 기록해야 하는지 여부',
  [Phrase.RecordEraDescription]: '클래식 시대를 기록해야 하는지 여부',
  [Phrase.RecordRaidsDescription]: '레이드를 기록해야 하는지 여부',
  [Phrase.RecordDungeonsDescription]: '쐐기+를 기록해야 하는지 여부',
  [Phrase.RecordTwoVTwoDescription]: '2v2를 기록해야 하는지 여부',
  [Phrase.RecordThreeVThreeDescription]: '3v3을 기록해야 하는지 여부',
  [Phrase.RecordFiveVFiveDescription]: '5v5를 기록해야 하는지 여부',
  [Phrase.RecordSkirmishDescription]: '연습전투를 기록해야 하는지 여부',
  [Phrase.RecordSoloShuffleDescription]: '1인전을 기록해야 하는지 여부',
  [Phrase.RecordBattlegroundsDescription]: '전장을 기록해야 하는지 여부',
  [Phrase.CaptureCursorDescription]: '기록에 커서를 포함할지 여부',
  [Phrase.MinKeystoneLevelDescription]: '기록할 최소 쐐기돌 단수',
  [Phrase.MinRaidDifficultyDescription]: '기록할 최소 레이드 난이도, 본섭만 적용',
  [Phrase.MinimizeOnQuitDescription]: '닫기 버튼이 종료가 아닌 최소화해야 하는지 여부',
  [Phrase.MinimizeToTrayDescription]: '최소화 버튼을 시스템 트레이로 최소화할지 작업 표시줄로 최소화할지 여부',
  [Phrase.ChatOverlayEnabledDescription]: '일부 영역을 가리고 기록하길 원할 때 활성화',
  [Phrase.ChatOverlayOwnImageDescription]: '사용자 지정 이미지를 채팅 오버레이로 사용해야 하는 경우 (Pro 사용자만 사용 가능)',
  [Phrase.ChatOverlayOwnImagePathDescription]: '채팅 오버레이로 사용할 PNG 파일 (Pro 사용자만 사용 가능)',
  [Phrase.ChatOverlayWidthDescription]: '채팅 오버레이 너비',
  [Phrase.ChatOverlayHeightDescription]: '채팅 오버레이 높이',
  [Phrase.ChatOverlayScaleDescription]: '채팅 오버레이 비율',
  [Phrase.ChatOverlayXPositionDescription]: '채팅 오버레이 x-위치',
  [Phrase.ChatOverlayYPositionDescription]: '채팅 오버레이 y-위치',
  [Phrase.SpeakerVolumeDescription]: '녹음 스피커의 볼륨',
  [Phrase.MicVolumeDescription]: '녹음 마이크의 볼륨',
  [Phrase.DeathMarkersDescription]: '타임라인에 표시할 죽음 마크',
  [Phrase.EncounterMarkersDescription]: '타임라인에 표시할 죽음 마크',
  [Phrase.RoundMarkersDescription]: '타임라인에 표시할 죽음 마크',
  [Phrase.PushToTalkDescription]: '단축키를 누르고 있을 때만 녹음해야 하는 경우',
  [Phrase.PushToTalkKeyDescription]: 'PTT 단축키 설정',
  [Phrase.PushToTalkMouseButtonDescription]: 'PTT 마우스 버튼',
  [Phrase.PushToTalkModifiersDescription]: 'PTT 단축키와 함께 필요한 수식어의 쉼표로 구분된 목록',
  [Phrase.ObsAudioSuppressionDescription]: '마이크에 잡히는 배경 소음을 억제하는데 도움이 될 수 있습니다.',
  [Phrase.RaidOverrunDescription]: '보스가 죽은 후 기록할 초과 시간',
  [Phrase.DungeonOverrunDescription]: '던전 완료 후 기록할 초과 시간',
  [Phrase.CloudStorageDescription]: '클라우드 모드 활성화 & 설정',
  [Phrase.CloudUploadDescription]: '클라우드 업로드 모드 활성화 & 설정. 기록이 완료되면 자동으로 클라우드에 업로드되며, 기존 동영상도 수동으로 업로드 할 수 있습니다.',
  [Phrase.CloudUploadRateLimitDescription]: '클라우드 업로드 속도를 제한해야 하는 경우 (업로드가 지연되는 경우 유용)',
  [Phrase.CloudUploadRateLimitMbpsDescription]: '업로드 속도 제한 (MB/s)',
  [Phrase.CloudAccountNameDescription]: '계정 이름',
  [Phrase.CloudAccountPasswordDescription]: '계정 비밀번호',
  [Phrase.CloudGuildNameDescription]: '그룹 또는 길드 이름',
  [Phrase.CloudUpload2v2Description]: '2v2를 자동 업로드해야 하는 경우',
  [Phrase.CloudUpload3v3Description]: '3v3을 자동 업로드해야 하는 경우',
  [Phrase.CloudUpload5v5Description]: '5v5를 자동 업로드해야 하는 경우',
  [Phrase.CloudUploadSkirmishDescription]: '연습전투를 자동 업로드해야 하는 경우',
  [Phrase.CloudUploadSoloShuffleDescription]: '1인전을 자동 업로드해야 하는 경우',
  [Phrase.CloudUploadDungeonsDescription]: '쐐기+를 자동 업로드해야 하는 경우',
  [Phrase.CloudUploadRaidsDescription]: '레이드를 자동 업로드해야 하는 경우',
  [Phrase.CloudUploadBattlegroundsDescription]: '전장을 자동 업로드해야 하는 경우',
  [Phrase.CloudUploadRaidMinDifficultyDescription]: '자동 업로드할 최소 레이드 난이도',
  [Phrase.CloudUploadDungeonMinLevelDescription]: '자동 업로드할 최소 쐐기돌 단수',
  [Phrase.LanguageDescription]: '프로그램에서 사용할 언어',
  [Phrase.RecordingsHeading]: 'Recordings',
  [Phrase.SettingsHeading]: 'Settings',
  [Phrase.GeneralButtonText]: '설정',
  [Phrase.SceneButtonText]: '화면 설정',
  [Phrase.Version]: 'Version',
  [Phrase.VideoCategoryTwoVTwoLabel]: '2v2',
  [Phrase.VideoCategoryThreeVThreeLabel]: '3v3',
  [Phrase.VideoCategoryFiveVFiveLabel]: '5v5',
  [Phrase.VideoCategorySkirmishLabel]: '연습전투',
  [Phrase.VideoCategorySoloShuffleLabel]: '1인전',
  [Phrase.VideoCategoryMythicPlusLabel]: '쐐기+',
  [Phrase.VideoCategoryRaidsLabel]: '레이드',
  [Phrase.VideoCategoryBattlegroundsLabel]: '전장',
  [Phrase.VideoCategoryClipsLabel]: '클립',
  [Phrase.UpdateAvailableTooltip]: '업데이트 사용 가능',
  [Phrase.LogsButtonLabel]: 'Logs',
  [Phrase.DiscordButtonLabel]: 'Discord',
  [Phrase.TestButtonUnable]: '지금은 테스트를 실행할 수 없습니다. 테스트를 실행하려면 게임이 실행 중이어야 하고, 설정이 유효해야 하며 현재 활동 중이 아니어야 합니다.',
  [Phrase.GeneralSettingsLabel]: '일반 설정',
  [Phrase.DiskStorageFolderLabel]: '디스크 저장 폴더',
  [Phrase.SeparateBufferFolderLabel]: '별도의 임시 폴더',
  [Phrase.BufferFolderLabel]: '임시 폴더',
  [Phrase.MaxDiskStorageLabel]: '디스크 저장 용량 제한 (GB)',
  [Phrase.WindowsSettingsLabel]: '윈도우 설정',
  [Phrase.RunOnStartupLabel]: '시작시 실행',
  [Phrase.StartMinimizedLabel]: '트레이 시작',
  [Phrase.MinimizeOnQuitLabel]: '종료시 트레이',
  [Phrase.MinimizeToTrayLabel]: '최소화 트레이',
  [Phrase.LocaleSettingsLabel]: '언어 설정',
  [Phrase.LanguageLabel]: '언어',
  [Phrase.GameSettingsLabel]: '게임 설정',
  [Phrase.RecordRetailLabel]: '본섭 기록',
  [Phrase.RetailLogPathLabel]: '본섭 로그 경로',
  [Phrase.RecordClassicLabel]: '클래식 기록',
  [Phrase.ClassicLogPathLabel]: '클래식 로그 경로',
  [Phrase.RecordClassicEraLabel]: '클래식 시대 기록',
  [Phrase.ClassicEraLogPathLabel]: '클래식 시대 로그 경로',
  [Phrase.PVESettingsLabel]: 'PvE 설정',
  [Phrase.RecordRaidsLabel]: '레이드 기록',
  [Phrase.MinimumEncounterDurationLabel]: '최소 전투 시간 (초)',
  [Phrase.RaidOverrunLabel]: '레이드 오버런 (초)',
  [Phrase.MinimumRaidDifficultyLabel]: '최소 레이드 난이도',
  [Phrase.RecordMythicPlusLabel]: '쐐기+ 기록',
  [Phrase.MinimumKeystoneLevelLabel]: '최소 쐐기돌 단수',
  [Phrase.MythicPlusOverrunLabel]: '쐐기+ 오버런 (초)',
  [Phrase.PVPSettingsLabel]: 'PvP 설정',
  [Phrase.Record2v2Label]: '2v2 기록',
  [Phrase.Record3v3Label]: '3v3 기록',
  [Phrase.Record5v5Label]: '5v5 기록',
  [Phrase.RecordSkirmishLabel]: '연습전투 기록',
  [Phrase.RecordSoloShuffleLabel]: '1인전 기록',
  [Phrase.RecordBattlegroundsLabel]: '전장 기록',
  [Phrase.CloudSettingsLabel]: '클라우드 설정',
  [Phrase.CloudPlaybackLabel]: '클라우드 모드',
  [Phrase.UserEmailLabel]: '사용자 / 이메일',
  [Phrase.PasswordLabel]: '비밀번호',
  [Phrase.GuildNameLabel]: '그룹 │ 길드',
  [Phrase.CloudUploadLabel]: '클라우드 업로드',
  [Phrase.UploadRateLimitToggleLabel]: '업로드 속도 제한',
  [Phrase.UploadRateLimitValueLabel]: '업로드 속도 제한 (MB/s)',
  [Phrase.UploadRaidsLabel]: '레이드 업로드',
  [Phrase.UploadDifficultyThresholdLabel]: '업로드 최소 난이도',
  [Phrase.UploadMythicPlusLabel]: '쐐기+ 업로드',
  [Phrase.UploadLevelThresholdLabel]: '업로드 최소 단수',
  [Phrase.Upload2v2Label]: '2v2 업로드',
  [Phrase.Upload3v3Label]: '3v3 업로드',
  [Phrase.Upload5v5Label]: '5v5 업로드',
  [Phrase.UploadSkirmishLabel]: '연습전투 업로드',
  [Phrase.UploadSoloShuffleLabel]: '1인전 업로드',
  [Phrase.UploadBattlgroundsLabel]: '전장 업로드',
  [Phrase.SettingsDisabledText]: '기록이 활성화된 동안에는 이러한 설정을 수정할 수 없습니다.',
  [Phrase.SomeSettingsDisabledText]: '기록이 활성화되어 있는 동안에는 일부 설정을 수정할 수 없습니다.',
  [Phrase.InvalidRetailLogPathText]: '잘못된 본섭 로그 경로',
  [Phrase.InvalidClassicLogPathText]: '잘못된 클래식 로그 경로',
  [Phrase.InvalidClassicEraLogPathText]: '잘못된 클래식 시대 로그 경로',
  [Phrase.CannotBeEmpty]: '비워둘 수 없습니다.',
  [Phrase.OneOrGreater]: '1 이상이어야 합니다.',
  [Phrase.SourceHeading]: '소스',
  [Phrase.VideoHeading]: '비디오',
  [Phrase.AudioHeading]: '오디오',
  [Phrase.OverlayHeading]: '오버레이',
  [Phrase.CaptureModeLabel]: '녹화 모드',
  [Phrase.WindowCaptureValue]: '윈도우',
  [Phrase.GameCaptureValue]: '게임',
  [Phrase.MonitorCaptureValue]: '모니터',
  [Phrase.MonitorLabel]: '모니터',
  [Phrase.CaptureCursorLabel]: '커서 포함',
  [Phrase.FPSLabel]: 'FPS',
  [Phrase.CanvasResolutionLabel]: '화면 해상도',
  [Phrase.QualityLabel]: '품질',
  [Phrase.VideoEncoderLabel]: '비디오 인코더',
  [Phrase.SpeakersLabel]: '스피커',
  [Phrase.MicrophonesLabel]: '마이크',
  [Phrase.AudioSuppressionLabel]: '오디오 억제',
  [Phrase.MonoInputLabel]: 'Mono Input',
  [Phrase.PushToTalkLabel]: 'PTT',
  [Phrase.PushToTalkKeyLabel]: 'PTT Key',
  [Phrase.PressAnyKeyCombination]: '키 조합을 누르세요..',
  [Phrase.ClickToBind]: '조합하려면 클릭',
  [Phrase.ClickToRebind]: '다시 조합하려면 클릭',
  [Phrase.Mouse]: 'Mouse',
  [Phrase.ChatOverlayLabel]: '채팅 오버레이',
  [Phrase.OwnImageLabel]: '지정 이미지',
  [Phrase.ImagePathLabel]: '이미지 경로',
  [Phrase.WidthLabel]: '너비',
  [Phrase.HeightLabel]: '높이',
  [Phrase.HorizontalLabel]: '가로 위치',
  [Phrase.VerticalLabel]: '세로 위치',
  [Phrase.ScaleLabel]: '스케일',
  [Phrase.TableHeaderEncounter]: 'Encounter',
  [Phrase.TableHeaderResult]: 'Result',
  [Phrase.TableHeaderPull]: 'Pull',
  [Phrase.TableHeaderDifficulty]: 'Difficulty',
  [Phrase.TableHeaderDuration]: 'Duration',
  [Phrase.TableHeaderDate]: 'Date',
  [Phrase.TableHeaderViewpoints]: 'Viewpoints',
  [Phrase.TableHeaderMap]: 'Map',
  [Phrase.TableHeaderType]: 'Type',
  [Phrase.TableHeaderTag]: 'Tag',
  [Phrase.SearchLabel]: '검색',
  [Phrase.SearchSuggestionMythicPlus]: 'Search',
  [Phrase.SearchSuggestionRaid]: 'Search',
  [Phrase.SearchSuggestionBattlegrounds]: 'Search',
  [Phrase.SearchSuggestionSoloShuffle]: 'Search',
  [Phrase.SearchSuggestionDefault]: 'Search',
  [Phrase.ShowRoundsLabel]: '라운드 표시',
  [Phrase.ShowDeathsLabel]: '죽음 표시',
  [Phrase.ShowEncountersLabel]: '보스 표시',
  [Phrase.FullScreenTooltip]: '전체 화면',
  [Phrase.PlaybackSpeedTooltip]: '재생 속도',
  [Phrase.ClipTooltip]: '클립',
  [Phrase.ClipUnavailableTooltip]: '디스크에 저장된 영상만 클립할 수 있습니다.',
  [Phrase.ConfirmTooltip]: '확인',
  [Phrase.CancelTooltip]: '취소',
  [Phrase.TagButtonTooltip]: '태그',
  [Phrase.StarButtonTooltip]: '북마크 켜짐',
  [Phrase.UnstarButtonTooltip]: '북마크 꺼짐',
  [Phrase.OpenFolderButtonTooltip]: '저장 폴더 열기',
  [Phrase.DeleteButtonTooltip]: '삭제',
  [Phrase.BulkDeleteButtonTooltip]: '선택한 항목 삭제',
  [Phrase.ShareLinkButtonTooltip]: '공유 가능한 링크 받기',
  [Phrase.CloudButtonTooltip]: '클라우드에 저장됨',
  [Phrase.DiskButtonTooltip]: '디스크에 저장됨',
  [Phrase.UploadButtonTooltip]: '클라우드에 업로드',
  [Phrase.DownloadButtonTooltip]: '디스크에 다운로드',
  [Phrase.StatusTitleRecording]: '녹화 중',
  [Phrase.StatusTitleWaiting]: '대기 중',
  [Phrase.StatusTitleInvalid]: '잘못된 구성',
  [Phrase.StatusTitleReady]: '녹화 준비 완료',
  [Phrase.StatusTitleFatalError]: '오류 발생',
  [Phrase.StatusTitleOverrunning]: '오버런 중',
  [Phrase.StatusTitleReconfiguring]: '대기 중',
  [Phrase.StatusDescriptionRecording]: '현재 기록 중입니다.',
  [Phrase.StatusDescriptionForceEnd]: '기록을 강제로 종료할 수 있습니다. 일반적으로 이 선택은 필요하지 않습니다. 실패한 쐐기+를 강제 종료하는 데 도움이 될 수 있습니다.',
  [Phrase.StatusDescriptionWaiting]: '게임이 시작되기를 기다리는 중.',
  [Phrase.StatusDescriptionConfiguredToRecord]: '프로그램이 녹화하도록 구성되었습니다',
  [Phrase.StatusDescriptionMisconfigured]: '프로그램이 잘못 구성되었습니다.',
  [Phrase.StatusDescriptionResolveError]: '아래 오류를 해결하세요.',
  [Phrase.StatusDescriptionDetectedRunning]: '게임이 실행 중임을 감지했습니다.',
  [Phrase.StatusDescriptionWatchingLogs]: '기록 가능한 이벤트가 전투 로그에 나타나기를 기다리고 있습니다.',
  [Phrase.StatusDescriptionTip]: 'Tip',
  [Phrase.StatusDescriptionIfNoRecording]: '기록이 시작되지 않으면 게임 내 로그 애드온 설정을 확인하고 로그 경로 구성이 올바른지 확인하세요.',
  [Phrase.StatusDescriptionFatalError]: '치명적인 오류가 발생했습니다.',
  [Phrase.StatusDescriptionPleaseResolve]: '아래 오류를 해결한 후 프로그램을 다시 시작하세요.',
  [Phrase.StatusDescriptionIfRecurring]: '이 문제가 반복되면 재설치 또는 도움을 요청하세요.',
  [Phrase.StatusDescriptionOverrunning]: '기록 활동이 성공적으로 완료되었음을 감지했습니다. 기록을 파악하기 위해 몇 초 더 필요합니다.',
  [Phrase.StatusDescriptionNothing]: '아무것도 없습니다. 설정에서 게임 모드를 활성화할 수 있습니다.',
  [Phrase.StatusHeading]: 'Status',
  [Phrase.StatusButtonForceEndLabel]: '강제 중지',
  [Phrase.Retail]: '본섭',
  [Phrase.Classic]: '클래식',
  [Phrase.Era]: '시대',
  [Phrase.MicListeningTooltip]: 'Listening',
  [Phrase.MicMutedTooltip]: 'Muted',
  [Phrase.CrashHappenedText]: 'OBS 충돌이 발생하여 복구되었습니다. 정상적인 작동에서는 이런 일이 일어나지 않아야 합니다.',
  [Phrase.SettingsPageApplicationHeader]: 'Application',
  [Phrase.SettingsPageGameHeader]: 'Game',
  [Phrase.SettingsPageProHeader]: 'Pro',
  [Phrase.UpdateAvailableTitle]: '업데이트 가능',
  [Phrase.UpdateAvailableText]: '아래 버튼을 클릭하여 다운로드하세요.',
  [Phrase.UpdateAvailableDownloadButtonText]: '다운로드',
  [Phrase.TestButtonHeading]: '테스트할 카테고리를 선택하세요',
  [Phrase.SystemTrayOpen]: '열기',
  [Phrase.SystemTrayQuit]: '종료',
  [Phrase.Kill]: '킬',
  [Phrase.Wipe]: '전멸',
  [Phrase.Win]: '승리',
  [Phrase.Loss]: '패배',
  [Phrase.Abandoned]: '탈주',
  [Phrase.Depleted]: '소진',
  [Phrase.AreYouSure]: '확실하신가요?',
  [Phrase.ThisWillPermanentlyDelete]: '영구적으로 삭제됩니다.',
  [Phrase.RecordingsFullStop]: '기록',
  [Phrase.ThisSelectionIncludes]: '선택 항목에 북마크 표시된 기록',
  [Phrase.StarredRecordingNotDeleted]: '북마크 표시된 기록은 삭제되지 않습니다.',
  [Phrase.Hold]: '',
  [Phrase.ToSkip]: '키를 누르고 시도하면 이 알림을 무시할 수 있음.',
  [Phrase.Death]: '죽음',
  [Phrase.AddADescription]: '태그 추가',
  [Phrase.TagDialogText]: '이 기록은 검색창에서 조회할 수 있습니다.',
  [Phrase.Clear]: '삭제',
  [Phrase.Save]: '저장',
  [Phrase.ShareableLinkTitle]: '공유할 수 있는 링크가 클립보드에 저장됐습니다.',
  [Phrase.ShareableLinkText]: '원하는 곳에 붙여 넣으세요.',
  [Phrase.ShareableLinkFailedTitle]: '링크 생성에 실패했습니다.',
  [Phrase.ShareableLinkFailedText]: '다시 시도해 보세요.',
  [Phrase.CloudUsage]: '클라우드 사용량',
  [Phrase.DiskUsage]: '디스크 사용량',
  [Phrase.Hardware]: 'Hardware',
  [Phrase.Software]: 'Software',
  [Phrase.All]: '전체',
  [Phrase.Own]: '자신',
  [Phrase.None]: '없음',
  [Phrase.On]: 'On',
  [Phrase.Off]: 'Off',
  [Phrase.Ultra]: '매우 높음',
  [Phrase.High]: '높음',
  [Phrase.Moderate]: '보통',
  [Phrase.Low]: '낮음',
  [Phrase.LFR]: '공격대 찾기',
  [Phrase.Normal]: '일반',
  [Phrase.Heroic]: '영웅',
  [Phrase.Mythic]: '신화',
  [Phrase.Pvp]: 'PVP',
  [Phrase.ErrorAccountEmpty]: '계정 이름은 비워둘 수 없습니다.',
  [Phrase.ErrorPasswordEmpty]: '계정 비밀번호는 비워둘 수 없습니다.',
  [Phrase.ErrorGuildEmpty]: '그룹 또는 길드는 비워둘 수 없습니다.',
  [Phrase.ErrorUserNotAuthorizedPlayback]: '클라우드에 접근할 수 있는 권한이 없습니다.',
  [Phrase.ErrorUserNotAuthorizedUpload]: '클라우드에 업로드할 수 있는 권한이 없습니다.',
  [Phrase.ErrorStoragePathInvalid]: '저장 경로가 잘못되었습니다.',
  [Phrase.ErrorBufferPathInvalid]: '임시 저장 경로가 잘못되었습니다.',
  [Phrase.ErrorStoragePathSameAsBufferPath]: '저장 경로가 임시 경로와 동일합니다.',
  [Phrase.ErrorCustomOverlayNotAllowed]: '사용자 지정 오버레이를 사용하려면 클라우드 모드를 사용 설정하세요.',
  [Phrase.ErrorNoCustomImage]: '사용자 지정 오버레이 이미지 경로가 지정되지 않았습니다.',
  [Phrase.ErrorCustomImageFileType]: '오버레이 이미지는 .png 또는 .gif 파일이어야 합니다.',
  [Phrase.ErrorCustomImageNotExist]: '지정한 파일이 존재하지 않습니다.',
  [Phrase.InvalidRetailLogPath]: '잘못된 본섭 로그 경로',
  [Phrase.InvalidClassicLogPath]: '잘못된 클래식 로그 경로',
  [Phrase.InvalidEraLogPath]: '잘못된 시대 로그 경로',
  [Phrase.SelectAnOutputDevice]: '출력 장치 선택',
  [Phrase.SelectAnInputDevice]: '입력 장치 선택',
  [Phrase.ClickToSelectAll]: '모두 선택하려면 클릭하세요',
  [Phrase.ClickToSortAsc]: '오름차순으로 정렬하려면 클릭하세요',
  [Phrase.ClickToSortDec]: '내림차순으로 정렬하려면 클릭하세요',
  [Phrase.ClickToClearSort]: '정렬을 취소하려면 클릭하세요',
  [Phrase.Start]: '시작',
  [Phrase.End]: '끝',
  [Phrase.Cloud]: "구름",
  [Phrase.Disk]: "디스크",
  [Phrase.Starred]: "별",
  [Phrase.Tagged]: "태그됨",
  [Phrase.Today]: "오늘",
  [Phrase.Yesterday]: "어제",
  [Phrase.Chests]: "상자",
  [Phrase.Timed]: "시간 제한",
};

export default KOREAN;