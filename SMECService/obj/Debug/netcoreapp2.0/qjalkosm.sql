IF OBJECT_ID(N'__EFMigrationsHistory') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

CREATE TABLE [analog_raw_ft] (
    [id] int NOT NULL,
    [created_at] datetime2 NOT NULL,
    [avg_value] float NOT NULL,
    CONSTRAINT [PK_analog_raw_ft] PRIMARY KEY ([id], [created_at])
);

GO

CREATE TABLE [analog_raw_rt] (
    [id] int NOT NULL IDENTITY,
    [Samples] int NOT NULL,
    [updated_at] datetime2 NOT NULL,
    [avg_value] float NOT NULL,
    CONSTRAINT [PK_analog_raw_rt] PRIMARY KEY ([id])
);

GO

CREATE TABLE [AspNetRoles] (
    [Id] nvarchar(450) NOT NULL,
    [ConcurrencyStamp] nvarchar(max) NULL,
    [Name] nvarchar(256) NULL,
    [NormalizedName] nvarchar(256) NULL,
    CONSTRAINT [PK_AspNetRoles] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [AspNetUsers] (
    [Id] nvarchar(450) NOT NULL,
    [AccessFailedCount] int NOT NULL,
    [ConcurrencyStamp] nvarchar(max) NULL,
    [Email] nvarchar(256) NULL,
    [EmailConfirmed] bit NOT NULL,
    [LockoutEnabled] bit NOT NULL,
    [LockoutEnd] datetimeoffset NULL,
    [NormalizedEmail] nvarchar(256) NULL,
    [NormalizedUserName] nvarchar(256) NULL,
    [PasswordHash] nvarchar(max) NULL,
    [PhoneNumber] nvarchar(max) NULL,
    [PhoneNumberConfirmed] bit NOT NULL,
    [SecurityStamp] nvarchar(max) NULL,
    [TwoFactorEnabled] bit NOT NULL,
    [UserName] nvarchar(256) NULL,
    CONSTRAINT [PK_AspNetUsers] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Focus] (
    [FocusId] int NOT NULL IDENTITY,
    [Description] nvarchar(max) NULL,
    [Name] nvarchar(max) NULL,
    CONSTRAINT [PK_Focus] PRIMARY KEY ([FocusId])
);

GO

CREATE TABLE [MeasuringComponent] (
    [MeasuringComponentId] int NOT NULL IDENTITY,
    [Name] nvarchar(max) NULL,
    CONSTRAINT [PK_MeasuringComponent] PRIMARY KEY ([MeasuringComponentId])
);

GO

CREATE TABLE [Unit] (
    [UnitId] int NOT NULL IDENTITY,
    [Name] nvarchar(max) NULL,
    CONSTRAINT [PK_Unit] PRIMARY KEY ([UnitId])
);

GO

CREATE TABLE [AspNetRoleClaims] (
    [Id] int NOT NULL IDENTITY,
    [ClaimType] nvarchar(max) NULL,
    [ClaimValue] nvarchar(max) NULL,
    [RoleId] nvarchar(450) NOT NULL,
    CONSTRAINT [PK_AspNetRoleClaims] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [AspNetRoles] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [AspNetUserClaims] (
    [Id] int NOT NULL IDENTITY,
    [ClaimType] nvarchar(max) NULL,
    [ClaimValue] nvarchar(max) NULL,
    [UserId] nvarchar(450) NOT NULL,
    CONSTRAINT [PK_AspNetUserClaims] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [AspNetUserLogins] (
    [LoginProvider] nvarchar(450) NOT NULL,
    [ProviderKey] nvarchar(450) NOT NULL,
    [ProviderDisplayName] nvarchar(max) NULL,
    [UserId] nvarchar(450) NOT NULL,
    CONSTRAINT [PK_AspNetUserLogins] PRIMARY KEY ([LoginProvider], [ProviderKey]),
    CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [AspNetUserRoles] (
    [UserId] nvarchar(450) NOT NULL,
    [RoleId] nvarchar(450) NOT NULL,
    CONSTRAINT [PK_AspNetUserRoles] PRIMARY KEY ([UserId], [RoleId]),
    CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [AspNetRoles] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [AspNetUserTokens] (
    [UserId] nvarchar(450) NOT NULL,
    [LoginProvider] nvarchar(450) NOT NULL,
    [Name] nvarchar(450) NOT NULL,
    [Value] nvarchar(max) NULL,
    CONSTRAINT [PK_AspNetUserTokens] PRIMARY KEY ([UserId], [LoginProvider], [Name]),
    CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [AspNetUsers] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [Analyzer] (
    [AnalyzerId] int NOT NULL IDENTITY,
    [FocusId] int NOT NULL,
    [Manufacturer] nvarchar(max) NULL,
    [Model] nvarchar(max) NULL,
    [SerialNumber] nvarchar(max) NULL,
    CONSTRAINT [PK_Analyzer] PRIMARY KEY ([AnalyzerId]),
    CONSTRAINT [FK_Analyzer_Focus_FocusId] FOREIGN KEY ([FocusId]) REFERENCES [Focus] ([FocusId]) ON DELETE CASCADE
);

GO

CREATE TABLE [Sensor] (
    [SensorId] int NOT NULL IDENTITY,
    [AnalyzerId] int NOT NULL,
    [MeasuringComponentId] int NOT NULL,
    [UnitId] int NOT NULL,
    CONSTRAINT [PK_Sensor] PRIMARY KEY ([SensorId]),
    CONSTRAINT [FK_Sensor_Analyzer_AnalyzerId] FOREIGN KEY ([AnalyzerId]) REFERENCES [Analyzer] ([AnalyzerId]) ON DELETE CASCADE,
    CONSTRAINT [FK_Sensor_MeasuringComponent_MeasuringComponentId] FOREIGN KEY ([MeasuringComponentId]) REFERENCES [MeasuringComponent] ([MeasuringComponentId]) ON DELETE CASCADE,
    CONSTRAINT [FK_Sensor_Unit_UnitId] FOREIGN KEY ([UnitId]) REFERENCES [Unit] ([UnitId]) ON DELETE CASCADE
);

GO

CREATE INDEX [IX_Analyzer_FocusId] ON [Analyzer] ([FocusId]);

GO

CREATE INDEX [IX_AspNetRoleClaims_RoleId] ON [AspNetRoleClaims] ([RoleId]);

GO

CREATE UNIQUE INDEX [RoleNameIndex] ON [AspNetRoles] ([NormalizedName]) WHERE [NormalizedName] IS NOT NULL;

GO

CREATE INDEX [IX_AspNetUserClaims_UserId] ON [AspNetUserClaims] ([UserId]);

GO

CREATE INDEX [IX_AspNetUserLogins_UserId] ON [AspNetUserLogins] ([UserId]);

GO

CREATE INDEX [IX_AspNetUserRoles_RoleId] ON [AspNetUserRoles] ([RoleId]);

GO

CREATE INDEX [EmailIndex] ON [AspNetUsers] ([NormalizedEmail]);

GO

CREATE UNIQUE INDEX [UserNameIndex] ON [AspNetUsers] ([NormalizedUserName]) WHERE [NormalizedUserName] IS NOT NULL;

GO

CREATE INDEX [IX_Sensor_AnalyzerId] ON [Sensor] ([AnalyzerId]);

GO

CREATE INDEX [IX_Sensor_MeasuringComponentId] ON [Sensor] ([MeasuringComponentId]);

GO

CREATE INDEX [IX_Sensor_UnitId] ON [Sensor] ([UnitId]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20180207121546_InitialCreate', N'2.0.1-rtm-125');

GO

