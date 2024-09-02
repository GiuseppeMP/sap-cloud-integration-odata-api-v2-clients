/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserCredentialsApi } from './UserCredentialsApi';
import { SecureParametersApi } from './SecureParametersApi';
import { OAuth2ClientCredentialsApi } from './OAuth2ClientCredentialsApi';
import { CertificateUserMappingsApi } from './CertificateUserMappingsApi';
import { KeyPairResourcesApi } from './KeyPairResourcesApi';
import { HistoryKeystoreEntriesApi } from './HistoryKeystoreEntriesApi';
import { KeystoresApi } from './KeystoresApi';
import { ChainCertificatesApi } from './ChainCertificatesApi';
import { SshKeyResourcesApi } from './SshKeyResourcesApi';
import { CertificateSigningRequestsApi } from './CertificateSigningRequestsApi';
import { KeyPairGenerationRequestsApi } from './KeyPairGenerationRequestsApi';
import { CertificateResourcesApi } from './CertificateResourcesApi';
import { CertificateChainResourcesApi } from './CertificateChainResourcesApi';
import { KeystoreEntriesApi } from './KeystoreEntriesApi';
import { KeystoreResourcesApi } from './KeystoreResourcesApi';
import { SshKeyGenerationRequestsApi } from './SshKeyGenerationRequestsApi';
import { RsaKeyGenerationRequestsApi } from './RsaKeyGenerationRequestsApi';
import { AccessPoliciesApi } from './AccessPoliciesApi';
import { ArtifactReferencesApi } from './ArtifactReferencesApi';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';

export function securityContent<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  > = defaultDeSerializers as any
): SecurityContent<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
> {
  return new SecurityContent(mergeDefaultDeSerializersWith(deSerializers));
}
class SecurityContent<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, entityApi: any): any {
    if (!this.apis[key]) {
      this.apis[key] = entityApi._privateFactory(this.deSerializers);
    }
    return this.apis[key];
  }

  get userCredentialsApi(): UserCredentialsApi<DeSerializersT> {
    return this.initApi('userCredentialsApi', UserCredentialsApi);
  }

  get secureParametersApi(): SecureParametersApi<DeSerializersT> {
    return this.initApi('secureParametersApi', SecureParametersApi);
  }

  get oAuth2ClientCredentialsApi(): OAuth2ClientCredentialsApi<DeSerializersT> {
    return this.initApi(
      'oAuth2ClientCredentialsApi',
      OAuth2ClientCredentialsApi
    );
  }

  get certificateUserMappingsApi(): CertificateUserMappingsApi<DeSerializersT> {
    return this.initApi(
      'certificateUserMappingsApi',
      CertificateUserMappingsApi
    );
  }

  get keyPairResourcesApi(): KeyPairResourcesApi<DeSerializersT> {
    return this.initApi('keyPairResourcesApi', KeyPairResourcesApi);
  }

  get historyKeystoreEntriesApi(): HistoryKeystoreEntriesApi<DeSerializersT> {
    return this.initApi('historyKeystoreEntriesApi', HistoryKeystoreEntriesApi);
  }

  get keystoresApi(): KeystoresApi<DeSerializersT> {
    const api = this.initApi('keystoresApi', KeystoresApi);
    const linkedApis = [this.initApi('keystoreEntriesApi', KeystoreEntriesApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get chainCertificatesApi(): ChainCertificatesApi<DeSerializersT> {
    const api = this.initApi('chainCertificatesApi', ChainCertificatesApi);
    const linkedApis = [this.initApi('keystoreEntriesApi', KeystoreEntriesApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get sshKeyResourcesApi(): SshKeyResourcesApi<DeSerializersT> {
    const api = this.initApi('sshKeyResourcesApi', SshKeyResourcesApi);
    const linkedApis = [this.initApi('keystoreEntriesApi', KeystoreEntriesApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get certificateSigningRequestsApi(): CertificateSigningRequestsApi<DeSerializersT> {
    const api = this.initApi(
      'certificateSigningRequestsApi',
      CertificateSigningRequestsApi
    );
    const linkedApis = [this.initApi('keystoreEntriesApi', KeystoreEntriesApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get keyPairGenerationRequestsApi(): KeyPairGenerationRequestsApi<DeSerializersT> {
    return this.initApi(
      'keyPairGenerationRequestsApi',
      KeyPairGenerationRequestsApi
    );
  }

  get certificateResourcesApi(): CertificateResourcesApi<DeSerializersT> {
    const api = this.initApi(
      'certificateResourcesApi',
      CertificateResourcesApi
    );
    const linkedApis = [this.initApi('keystoreEntriesApi', KeystoreEntriesApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get certificateChainResourcesApi(): CertificateChainResourcesApi<DeSerializersT> {
    const api = this.initApi(
      'certificateChainResourcesApi',
      CertificateChainResourcesApi
    );
    const linkedApis = [this.initApi('keystoreEntriesApi', KeystoreEntriesApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get keystoreEntriesApi(): KeystoreEntriesApi<DeSerializersT> {
    const api = this.initApi('keystoreEntriesApi', KeystoreEntriesApi);
    const linkedApis = [
      this.initApi('chainCertificatesApi', ChainCertificatesApi),
      this.initApi('certificateResourcesApi', CertificateResourcesApi),
      this.initApi('sshKeyResourcesApi', SshKeyResourcesApi),
      this.initApi('keystoresApi', KeystoresApi),
      this.initApi(
        'certificateChainResourcesApi',
        CertificateChainResourcesApi
      ),
      this.initApi(
        'certificateSigningRequestsApi',
        CertificateSigningRequestsApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get keystoreResourcesApi(): KeystoreResourcesApi<DeSerializersT> {
    return this.initApi('keystoreResourcesApi', KeystoreResourcesApi);
  }

  get sshKeyGenerationRequestsApi(): SshKeyGenerationRequestsApi<DeSerializersT> {
    return this.initApi(
      'sshKeyGenerationRequestsApi',
      SshKeyGenerationRequestsApi
    );
  }

  get rsaKeyGenerationRequestsApi(): RsaKeyGenerationRequestsApi<DeSerializersT> {
    return this.initApi(
      'rsaKeyGenerationRequestsApi',
      RsaKeyGenerationRequestsApi
    );
  }

  get accessPoliciesApi(): AccessPoliciesApi<DeSerializersT> {
    const api = this.initApi('accessPoliciesApi', AccessPoliciesApi);
    const linkedApis = [
      this.initApi('artifactReferencesApi', ArtifactReferencesApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get artifactReferencesApi(): ArtifactReferencesApi<DeSerializersT> {
    const api = this.initApi('artifactReferencesApi', ArtifactReferencesApi);
    const linkedApis = [this.initApi('accessPoliciesApi', AccessPoliciesApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
