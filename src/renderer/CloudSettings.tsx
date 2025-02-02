import * as React from 'react';
import { configSchema, ConfigurationSchema } from 'config/configSchema';
import { AppState, RecStatus } from 'main/types';
import { Cloud, Info } from 'lucide-react';
import { getLocalePhrase, Phrase } from 'localisation/translations';
import { setConfigValues, useSettings } from './useSettings';
import Switch from './components/Switch/Switch';
import Label from './components/Label/Label';
import { Tooltip } from './components/Tooltip/Tooltip';
import { Input } from './components/Input/Input';
import Progress from './components/Progress/Progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/Select/Select';
import Separator from './components/Separator/Separator';
import TextBanner from './components/TextBanner/TextBanner';

const ipc = window.electron.ipcRenderer;

const raidDifficultyOptions = [
  { name: 'LFR', phrase: Phrase.LFR },
  { name: 'Normal', phrase: Phrase.Normal },
  { name: 'Heroic', phrase: Phrase.Heroic },
  { name: 'Mythic', phrase: Phrase.Mythic },
];

let debounceTimer: NodeJS.Timeout | undefined;

interface IProps {
  recorderStatus: RecStatus;
  appState: AppState;
}

const CloudSettings = (props: IProps) => {
  const { recorderStatus, appState } = props;
  const [config, setConfig] = useSettings();
  const initialRender = React.useRef(true);

  React.useEffect(() => {
    if (initialRender.current) {
      // Drop out on initial render after getting the cloud status,
      // we don't need to set config. The first time we load.
      initialRender.current = false;
      return;
    }

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    debounceTimer = setTimeout(() => {
      setConfigValues({
        cloudStorage: config.cloudStorage,
        cloudAccountName: config.cloudAccountName,
        cloudAccountPassword: config.cloudAccountPassword,
        cloudGuildName: config.cloudGuildName,
        cloudUpload: config.cloudUpload,
        cloudUploadRateLimit: config.cloudUploadRateLimit,
        cloudUploadRateLimitMbps: config.cloudUploadRateLimitMbps,
        cloudUpload2v2: config.cloudUpload2v2,
        cloudUpload3v3: config.cloudUpload3v3,
        cloudUpload5v5: config.cloudUpload5v5,
        cloudUploadSkirmish: config.cloudUploadSkirmish,
        cloudUploadSoloShuffle: config.cloudUploadSoloShuffle,
        cloudUploadDungeons: config.cloudUploadDungeons,
        cloudUploadRaids: config.cloudUploadRaids,
        cloudUploadBattlegrounds: config.cloudUploadBattlegrounds,
        cloudUploadRaidMinDifficulty: config.cloudUploadRaidMinDifficulty,
        cloudUploadDungeonMinLevel: config.cloudUploadDungeonMinLevel,
        cloudUploadClips: config.cloudUploadClips,
        chatOverlayOwnImage: config.chatOverlayOwnImage,
		RakGamingServerLogin: config.RakGamingServerLogin,
		RakGamingServerPassword: config.RakGamingServerPassword,
      });

      // Inform the backend of a settings change so we can update config
      // and validate it's good.
      ipc.sendMessage('settingsChange', []);
    }, 500);
  }, [
    config.cloudStorage,
    config.cloudAccountName,
    config.cloudAccountPassword,
    config.cloudGuildName,
    config.cloudUpload,
    config.cloudUploadRateLimit,
    config.cloudUploadRateLimitMbps,
    config.cloudUpload2v2,
    config.cloudUpload3v3,
    config.cloudUpload5v5,
    config.cloudUploadSkirmish,
    config.cloudUploadSoloShuffle,
    config.cloudUploadDungeons,
    config.cloudUploadRaids,
    config.cloudUploadBattlegrounds,
    config.cloudUploadRaidMinDifficulty,
    config.cloudUploadDungeonMinLevel,
    config.cloudUploadClips,
    config.chatOverlayOwnImage,
	config.RakGamingServerLogin,
	config.RakGamingServerPassword,
  ]);

  const isComponentDisabled = () => {
    const isRecording = recorderStatus === RecStatus.Recording;
    const isOverrunning = recorderStatus === RecStatus.Overrunning;
    return isRecording || isOverrunning;
  };

  const getDisabledText = () => {
    if (!isComponentDisabled()) {
      return <></>;
    }

    return (
      <TextBanner>
        {getLocalePhrase(appState.language, Phrase.SomeSettingsDisabledText)}
      </TextBanner>
    );
  };

  const getSwitch = (
    preference: keyof ConfigurationSchema,
    changeFn: (checked: boolean) => void,
  ) => (
    <Switch
      checked={Boolean(config[preference])}
      name={preference}
      onCheckedChange={changeFn}
    />
  );

  const getSwitchForm = (
    preference: keyof ConfigurationSchema,
    label: Phrase,
  ) => {
    const changeFn = (checked: boolean) => {
      setConfig((prevState) => {
        return {
          ...prevState,
          [preference]: checked,
        };
      });
    };

    return (
      <div className="flex flex-col w-[140px]">
        <Label htmlFor={preference} className="flex items-center">
          {getLocalePhrase(appState.language, label)}
          <Tooltip
            content={getLocalePhrase(
              appState.language,
              configSchema[preference].description,
            )}
            side="top"
          >
            <Info size={20} className="inline-flex ml-2" />
          </Tooltip>
        </Label>
        <div className="flex h-10 items-center">
          {getSwitch(preference, changeFn)}
        </div>
      </div>
    );
  };

  const setMinRaidThreshold = (value: string) => {
    setConfig((prevState) => {
      return {
        ...prevState,
        cloudUploadRaidMinDifficulty: value,
      };
    });
  };

  const getMinRaidDifficultySelect = () => {
    if (!config.cloudUploadRaids) {
      return <></>;
    }

    return (
      <div className="flex flex-col w-1/4 min-w-40 max-w-60">
        <Label
          htmlFor="cloudUploadRaidMinDifficulty"
          className="flex items-center"
        >
          {getLocalePhrase(
            appState.language,
            Phrase.UploadDifficultyThresholdLabel,
          )}
          <Tooltip
            content={getLocalePhrase(
              appState.language,
              configSchema.cloudUploadRaidMinDifficulty.description,
            )}
            side="top"
          >
            <Info size={20} className="inline-flex ml-2" />
          </Tooltip>
        </Label>
        <Select
          onValueChange={setMinRaidThreshold}
          disabled={!config.cloudUploadRaids}
          value={config.cloudUploadRaidMinDifficulty}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a difficulty" />
          </SelectTrigger>
          <SelectContent>
            {raidDifficultyOptions.map((difficulty) => (
              <SelectItem key={difficulty.name} value={difficulty.name}>
                {getLocalePhrase(appState.language, difficulty.phrase)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  };

  const setMinKeystoneLevel = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      return;
    }

    setConfig((prevState) => {
      return {
        ...prevState,
        cloudUploadDungeonMinLevel: parseInt(event.target.value, 10),
      };
    });
  };

  const getMinKeystoneLevelField = () => {
    if (!config.cloudUploadDungeons) {
      return <></>;
    }

    return (
      <div className="flex flex-col w-1/4 min-w-40 max-w-60">
        <Label
          htmlFor="cloudUploadDungeonMinLevel"
          className="flex items-center"
        >
          {getLocalePhrase(appState.language, Phrase.UploadLevelThresholdLabel)}
          <Tooltip
            content={getLocalePhrase(
              appState.language,
              configSchema.cloudUploadDungeonMinLevel.description,
            )}
            side="top"
          >
            <Info size={20} className="inline-flex ml-2" />
          </Tooltip>
        </Label>
        <Input
          value={config.cloudUploadDungeonMinLevel}
          name="cloudUploadDungeonMinLevel"
          disabled={!config.cloudUploadDungeons}
          onChange={setMinKeystoneLevel}
          type="numeric"
          min={2}
        />
      </div>
    );
  };

  const setCloudStorage = (checked: boolean) => {
    setConfig((prevState) => {
      const cloudStorage = checked;

      const newState = {
        ...prevState,
        cloudStorage,
      };

      if (!cloudStorage) {
        // Can't have upload on if cloud storage is off so also set that
        // to false if we're disabling cloud storage.
        newState.cloudUpload = false;
      }

      return newState;
    });
  };

  const setCloudUpload = (checked: boolean) => {
    setConfig((prevState) => {
      return {
        ...prevState,
        cloudUpload: checked,
      };
    });
  };

  const getCloudSwitch = () => {
    if (isComponentDisabled()) {
      return <></>;
    }

    return (
      <div className="flex flex-col w-[140px]">
        <Label htmlFor="cloudStorage" className="flex items-center">
          {getLocalePhrase(appState.language, Phrase.CloudPlaybackLabel)}
          <Tooltip
            content={getLocalePhrase(
              appState.language,
              configSchema.cloudStorage.description,
            )}
            side="top"
          >
            <Info size={20} className="inline-flex ml-2" />
          </Tooltip>
        </Label>
        <div className="flex h-10 items-center">
          {getSwitch('cloudStorage', setCloudStorage)}
        </div>
      </div>
    );
  };

  const getCloudUploadSwitch = () => {
    if (isComponentDisabled() || !config.cloudStorage) {
      return <></>;
    }

    return (
      <div className="flex flex-col w-[140px]">
        <Label htmlFor="cloudUpload" className="flex items-center">
          {getLocalePhrase(appState.language, Phrase.CloudUploadLabel)}
          <Tooltip
            content={getLocalePhrase(
              appState.language,
              configSchema.cloudUpload.description,
            )}
            side="top"
          >
            <Info size={20} className="inline-flex ml-2" />
          </Tooltip>
        </Label>
        <div className="flex h-10 items-center">
          {getSwitch('cloudUpload', setCloudUpload)}
        </div>
      </div>
    );
  };

  const setCloudUploadRateLimit = (checked: boolean) => {
    setConfig((prevState) => {
      return {
        ...prevState,
        cloudUploadRateLimit: checked,
      };
    });
  };

  const getCloudUploadRateLimitSwitch = () => {
    if (isComponentDisabled() || !config.cloudUpload) {
      return <></>;
    }

    return (
      <div className="flex flex-col w-[140px]">
        <Label htmlFor="cloudUploadRateLimit" className="flex items-center">
          {getLocalePhrase(
            appState.language,
            Phrase.UploadRateLimitToggleLabel,
          )}
          <Tooltip
            content={getLocalePhrase(
              appState.language,
              configSchema.cloudUploadRateLimit.description,
            )}
            side="top"
          >
            <Info size={20} className="inline-flex ml-2" />
          </Tooltip>
        </Label>
        <div className="flex h-10 items-center">
          {getSwitch('cloudUploadRateLimit', setCloudUploadRateLimit)}
        </div>
      </div>
    );
  };

  const setCloudAccountName = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfig((prevState) => {
      return {
        ...prevState,
        cloudAccountName: event.target.value,
      };
    });
  };

  const getCloudAccountNameField = () => {
    if (isComponentDisabled() || !config.cloudStorage) {
      return <></>;
    }

    return (
      <div className="flex flex-col w-1/4 min-w-60 max-w-80">
        <Label htmlFor="cloudAccountName" className="flex items-center">
          {getLocalePhrase(appState.language, Phrase.UserEmailLabel)}
          <Tooltip
            content={getLocalePhrase(
              appState.language,
              configSchema.cloudAccountName.description,
            )}
            side="top"
          >
            <Info size={20} className="inline-flex ml-2" />
          </Tooltip>
        </Label>
        <Input
          name="cloudAccountName"
          value={config.cloudAccountName}
          onChange={setCloudAccountName}
          spellCheck={false}
          required
        />
        {config.cloudAccountName === '' && (
          <span className="text-error text-xs font-semibold mt-1">
            {getLocalePhrase(appState.language, Phrase.CannotBeEmpty)}
          </span>
        )}
      </div>
    );
  };

  const setCloudPassword = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfig((prevState) => {
      return {
        ...prevState,
        cloudAccountPassword: event.target.value,
      };
    });
  };

  const getCloudAccountPasswordField = () => {
    if (isComponentDisabled() || !config.cloudStorage) {
      return <></>;
    }

    return (
      <div className="flex flex-col w-1/4 min-w-60 max-w-80">
        <Label htmlFor="cloudAccountPassword" className="flex items-center">
          {getLocalePhrase(appState.language, Phrase.PasswordLabel)}
          <Tooltip
            content={getLocalePhrase(
              appState.language,
              configSchema.cloudAccountPassword.description,
            )}
            side="top"
          >
            <Info size={20} className="inline-flex ml-2" />
          </Tooltip>
        </Label>
        <Input
          name="cloudAccountPassword"
          value={config.cloudAccountPassword}
          onChange={setCloudPassword}
          spellCheck={false}
          type="password"
          required
        />
        {config.cloudAccountPassword === '' && (
          <span className="text-error text-xs font-semibold mt-1">
            {getLocalePhrase(appState.language, Phrase.CannotBeEmpty)}
          </span>
        )}
      </div>
    );
  };

  const setCloudGuild = (value: string) => {
    setConfig((prevState) => {
      return {
        ...prevState,
        cloudGuildName: value,
      };
    });
  };

  const getCloudGuildField = () => {
    if (isComponentDisabled() || !config.cloudStorage) {
      return <></>;
    }

    const { guilds } = appState.cloudStatus;

    return (
      <div className="flex flex-col w-1/4 min-w-60 max-w-80">
        <Label htmlFor="cloudGuildName" className="flex items-center">
          {getLocalePhrase(appState.language, Phrase.GuildNameLabel)}
          <Tooltip
            content={getLocalePhrase(
              appState.language,
              configSchema.cloudGuildName.description,
            )}
            side="top"
          >
            <Info size={20} className="inline-flex ml-2" />
          </Tooltip>
        </Label>
        <Select onValueChange={setCloudGuild} value={config.cloudGuildName}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a guild" />
          </SelectTrigger>
          <SelectContent>
            {guilds.map((guild) => (
              <SelectItem key={guild} value={guild}>
                {guild}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  };

  const getCloudUsageBar = () => {
    const { usage, limit } = appState.cloudStatus;
    const usageGB = usage / 1024 ** 3;
    const limitGB = limit / 1024 ** 3;
    const perc = Math.round((100 * usage) / limit);

    return (
      <div className="flex flex-row items-center justify-start w-1/3 min-w-80 max-w-120 gap-x-2">
        <Tooltip
          content={getLocalePhrase(appState.language, Phrase.CloudUsage)}
        >
          <Cloud size={24} />
        </Tooltip>

        <Progress value={perc} className="h-3" />
        <span className="text-[11px] text-foreground font-semibold whitespace-nowrap">
          {Math.round(usageGB)}GB / {Math.round(limitGB)}GB
        </span>
      </div>
    );
  };

  const getCloudUploadCategorySettings = () => {
    return (
      <>
        <div className="flex flex-row gap-x-6">
          {getSwitchForm('cloudUploadRaids', Phrase.UploadRaidsLabel)}
          {getMinRaidDifficultySelect()}
        </div>

        <div className="flex flex-row gap-x-6">
          {getSwitchForm('cloudUploadDungeons', Phrase.UploadMythicPlusLabel)}
          {getMinKeystoneLevelField()}
        </div>

        <div className="flex flex-row gap-x-6">
          {getSwitchForm('cloudUpload2v2', Phrase.Upload2v2Label)}
          {getSwitchForm('cloudUpload3v3', Phrase.Upload3v3Label)}
          {getSwitchForm('cloudUpload5v5', Phrase.Upload5v5Label)}
          {getSwitchForm('cloudUploadSkirmish', Phrase.UploadSkirmishLabel)}
          {getSwitchForm(
            'cloudUploadSoloShuffle',
            Phrase.UploadSoloShuffleLabel,
          )}
          {getSwitchForm(
            'cloudUploadBattlegrounds',
            Phrase.UploadBattlgroundsLabel,
          )}
        </div>

        <div className="flex flex-row gap-x-6">
          {getSwitchForm('cloudUploadClips', Phrase.UploadClipsLabel)}
        </div>
      </>
    );
  };

  const setUploadRateLimit = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      return;
    }

    setConfig((prevState) => {
      return {
        ...prevState,
        cloudUploadRateLimitMbps: parseInt(event.target.value, 10),
      };
    });
  };

  const getRateLimitField = () => {
    if (!config.cloudUpload || !config.cloudUploadRateLimit) {
      return <></>;
    }

    return (
      <div className="flex flex-col w-1/4 min-w-60 max-w-80">
        <Label htmlFor="cloudUploadRateLimitMbps" className="flex items-center">
          {getLocalePhrase(appState.language, Phrase.UploadRateLimitValueLabel)}
          <Tooltip
            content={getLocalePhrase(
              appState.language,
              configSchema.cloudUploadRateLimitMbps.description,
            )}
            side="top"
          >
            <Info size={20} className="inline-flex ml-2" />
          </Tooltip>
        </Label>
        <Input
          name="cloudUploadRateLimitMbps"
          value={config.cloudUploadRateLimitMbps}
          onChange={setUploadRateLimit}
          spellCheck={false}
          type="numeric"
        />
        {config.cloudUploadRateLimitMbps < 1 && (
          <span className="text-error text-xs font-semibold mt-1">
            {getLocalePhrase(appState.language, Phrase.OneOrGreater)}
          </span>
        )}
      </div>
    );
  };

  const setRakGamingServerLogin = async (
	event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setConfig((prevState) => {
			return {
				...prevState,
				RakGamingServerLogin: event.target.value,
			};
		});
		console.log('Updated server login:', event.target.value);
	};

  const getRakGamingAccountNameField = () => {
	if (isComponentDisabled()) {
	  return <></>;
	}

	return (
	  <div className="flex flex-col w-1/4 min-w-60 max-w-80">
		<Label htmlFor="RakGamingServerLogin" className="flex items-center">
		  {"Rak Gaming Login"}
		  <Tooltip
			content={"Логин для сервера Rak Gaming"}
			side="top"
		  >
			<Info size={20} className="inline-flex ml-2" />
		  </Tooltip>
		</Label>
		<Input
		  name="RakGamingServerLogin"
		  value={config.RakGamingServerLogin}
		  onChange={setRakGamingServerLogin}
		  spellCheck={false}
		  required
		/>
		{config.RakGamingServerLogin === '' && (
		  <span className="text-error text-xs font-semibold mt-1">
			{getLocalePhrase(appState.language, Phrase.CannotBeEmpty)}
		  </span>
		)}
	  </div>
	);
  };

  	const setRakGamingServerPassword = async (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setConfig((prevState) => {
			return {
				...prevState,
				RakGamingServerPassword: event.target.value,
			};
		});
	};

  	const getRakGamingPasswordField = () => {
		if (isComponentDisabled()) {
			return <></>;
		}
		// finish this
		return (
			<div className="flex flex-col w-1/4 min-w-60 max-w-80">
				<Label htmlFor="RakGamingServerPassword" className="flex items-center">
					{"Rak Gaming Password"}
					<Tooltip
						content={"Пароль для сервра Rak Gaming"}
						side="top"
					>
						<Info size={20} className="inline-flex ml-2" />
					</Tooltip>
				</Label>
				<Input
					name="RakGamingServerPassword"
					value={config.RakGamingServerPassword}
					onChange={setRakGamingServerPassword}
					spellCheck={false}
					type="password"
					required
				/>
				{config.RakGamingServerPassword === '' && (
					<span className="text-error text-xs font-semibold mt-1">
						{getLocalePhrase(appState.language, Phrase.CannotBeEmpty)}
					</span>
				)}
			</div>
		);
	};



  return (
    <div className="flex flex-col gap-y-4 flex-wrap">
		<div className='flex flex-row gap-4 flex-wrap'>
	  		{getRakGamingAccountNameField()}
			{getRakGamingPasswordField()}
		</div>
		<Separator className="my-4" />
      {getDisabledText()}



      <div className="flex flex-row">{getCloudSwitch()}</div>

      <div className="flex flex-row gap-4 flex-wrap">
        {getCloudAccountNameField()}
        {getCloudAccountPasswordField()}
        {getCloudGuildField()}
      </div>

      {config.cloudStorage && (
        <>
          {getCloudUsageBar()}
          <Separator className="my-4" />
        </>
      )}




      <div className="flex flex-col gap-4">
        <div>{getCloudUploadSwitch()}</div>
        <div className="flex flex-row gap-x-6">
          {getCloudUploadRateLimitSwitch()}
          {getRateLimitField()}
        </div>
        {config.cloudUpload && getCloudUploadCategorySettings()}
      </div>
    </div>
  );
};

export default CloudSettings;
